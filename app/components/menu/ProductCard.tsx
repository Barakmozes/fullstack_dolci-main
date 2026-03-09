"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlinePlus, HiCheck } from "react-icons/hi";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice, cn, truncate } from "@/lib/utils";
import type { Product } from "@/data/types";

const tagStyles: Record<string, string> = {
  "new": "badge-new",
  "best-seller": "badge-bestseller",
  "chefs-pick": "badge-chefspick",
  "limited": "badge-limited",
  "seasonal": "badge-seasonal",
};

const tagLabels: Record<string, string> = {
  "new": "New",
  "best-seller": "Best Seller",
  "chefs-pick": "Chef's Pick",
  "limited": "Limited",
  "seasonal": "Seasonal",
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const displayPrice = product.sizes && product.sizes.length > 0
    ? product.sizes[0].price
    : product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/product/${product.slug}`} className="block group">
        <div className="card overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Badges */}
            {product.tags.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className={tagStyles[tag] || "badge"}>
                    {tagLabels[tag] || tag}
                  </span>
                ))}
              </div>
            )}

            {/* Sale Badge */}
            {product.originalPrice && (
              <div className="absolute top-3 right-3">
                <span className="badge bg-red-500 text-white">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>
            )}

            {/* Quick Add Button */}
            <motion.button
              onClick={handleAddToCart}
              className={cn(
                "absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-medium transition-all duration-300",
                added
                  ? "bg-green-500 text-white"
                  : "bg-white text-chocolate-800 opacity-0 group-hover:opacity-100 hover:bg-gold-500 hover:text-white"
              )}
              whileTap={{ scale: 0.9 }}
              aria-label={`Add ${product.name} to cart`}
            >
              {added ? (
                <HiCheck className="w-5 h-5" />
              ) : (
                <HiOutlinePlus className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-serif font-semibold text-chocolate-800 text-base mb-1 group-hover:text-gold-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-chocolate-400 mb-3 line-clamp-2 leading-relaxed">
              {truncate(product.description, 80)}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-chocolate-800">
                  {formatPrice(displayPrice)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-chocolate-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.rating > 0 && (
                <div className="flex items-center gap-1">
                  <span className="text-gold-500 text-sm">★</span>
                  <span className="text-xs text-chocolate-500">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
