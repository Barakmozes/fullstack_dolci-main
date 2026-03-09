"use client";

import ProductCard from "./ProductCard";
import { useLocale } from "@/lib/useLocale";
import type { Product } from "@/data/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { t } = useLocale();

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-6xl mb-4">🧁</p>
        <h3 className="heading-sm text-chocolate-700 mb-2">{t("grid.noProducts")}</h3>
        <p className="text-body-sm">
          {t("grid.noProductsMessage")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
