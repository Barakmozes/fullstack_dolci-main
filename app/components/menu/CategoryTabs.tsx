"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/data/types";

interface CategoryTabsProps {
  categories: { slug: CategorySlug | "all"; name: string }[];
  activeCategory: CategorySlug | "all";
  onCategoryChange: (category: CategorySlug | "all") => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide py-2 px-1 -mx-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className={cn(
              "relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0",
              activeCategory === cat.slug
                ? "text-white"
                : "text-chocolate-600 hover:text-chocolate-800 hover:bg-cream-200"
            )}
          >
            {activeCategory === cat.slug && (
              <motion.div
                layoutId="active-category"
                className="absolute inset-0 bg-chocolate-800 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat.name}</span>
          </button>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none" />
    </div>
  );
}
