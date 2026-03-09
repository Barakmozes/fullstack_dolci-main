"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import CategoryTabs from "@/app/components/menu/CategoryTabs";
import ProductGrid from "@/app/components/menu/ProductGrid";
import { useLocale } from "@/lib/useLocale";
import type { Product, Category, CategorySlug } from "@/data/types";

interface MenuPageClientProps {
  products: Product[];
  categories: Category[];
}

type SortOption = "featured" | "price-low" | "price-high" | "rating" | "name";

export default function MenuPageClient({ products, categories }: MenuPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const { t, localized } = useLocale();

  const categoryTabs = [
    { slug: "all" as const, name: t("menu.all") },
    ...categories.map((c) => ({ slug: c.slug, name: localized(c, "name") })),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.nameHe.includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => a.sortOrder - b.sortOrder);
        break;
    }

    return result;
  }, [products, activeCategory, searchQuery, sortBy]);

  return (
    <div>
      {/* Page Header */}
      <div className="text-center mb-10">
        <span className="text-gold-500 font-script text-lg">{t("categories.sectionLabel")}</span>
        <h1 className="heading-xl text-chocolate-800 mt-1">{t("menu.pageTitle")}</h1>
        <p className="text-body mt-3 max-w-xl mx-auto">
          {t("menu.pageSubtitle")}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-chocolate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("menu.searchPlaceholder")}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-cream-300 text-chocolate-800 text-sm placeholder-chocolate-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent shadow-soft"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-3 rounded-full bg-white border border-cream-300 text-chocolate-700 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-soft appearance-none cursor-pointer pr-8"
          >
            <option value="featured">{t("menu.sortFeatured")}</option>
            <option value="price-low">{t("menu.sortPriceLow")}</option>
            <option value="price-high">{t("menu.sortPriceHigh")}</option>
            <option value="rating">{t("menu.sortRating")}</option>
            <option value="name">{t("menu.sortName")}</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <CategoryTabs
          categories={categoryTabs}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-chocolate-500">
          {t("menu.showing")} <span className="font-medium text-chocolate-700">{filteredProducts.length}</span>{" "}
          {filteredProducts.length === 1 ? t("menu.product") : t("menu.products")}
          {activeCategory !== "all" && (() => {
            const cat = categories.find(c => c.slug === activeCategory);
            return cat ? (
              <span> {t("menu.in")} <span className="font-medium text-chocolate-700">
                {localized(cat, "name")}
              </span></span>
            ) : null;
          })()}
        </p>
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${sortBy}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProductGrid products={filteredProducts} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
