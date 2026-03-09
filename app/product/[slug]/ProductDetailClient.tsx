"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlinePlus, HiOutlineMinus, HiOutlineHeart } from "react-icons/hi";
import toast from "react-hot-toast";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice, cn } from "@/lib/utils";
import ProductCard from "@/app/components/menu/ProductCard";
import type { Product, ProductSize } from "@/data/types";

const allergenEmojis: Record<string, string> = {
  gluten: "🌾",
  dairy: "🥛",
  eggs: "🥚",
  nuts: "🥜",
  soy: "🫘",
  sesame: "🌱",
};

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | undefined>(
    product.sizes?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const currentPrice = selectedSize?.price ?? product.price;

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize);
    toast.success(`${product.name} added to cart!`);
    openCart();
  };

  return (
    <div className="container-custom">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-chocolate-400 mb-8">
        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/menu" className="hover:text-gold-600 transition-colors">Menu</Link>
        <span>/</span>
        <span className="text-chocolate-700">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-200 mb-4">
            <Image
              src={product.images[activeImage] || product.thumbnail}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {product.tags.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "badge",
                      tag === "new" && "badge-new",
                      tag === "best-seller" && "badge-bestseller",
                      tag === "chefs-pick" && "badge-chefspick",
                      tag === "limited" && "badge-limited",
                      tag === "seasonal" && "badge-seasonal"
                    )}
                  >
                    {tag === "best-seller" ? "Best Seller" : tag === "chefs-pick" ? "Chef's Pick" : tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                    activeImage === i
                      ? "border-gold-500 shadow-warm"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-chocolate-800 mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-chocolate-400 font-sans mb-4">{product.nameHe}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= Math.round(product.rating) ? "text-gold-500" : "text-cream-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-chocolate-500">
              {product.rating.toFixed(1)} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-serif font-bold text-chocolate-800">
              {formatPrice(currentPrice)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-chocolate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-chocolate-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-chocolate-700 uppercase tracking-wider mb-3">
                Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-5 py-3 rounded-xl border-2 text-sm font-medium transition-all",
                      selectedSize?.id === size.id
                        ? "border-chocolate-800 bg-chocolate-800 text-cream-100"
                        : "border-cream-300 text-chocolate-700 hover:border-gold-400"
                    )}
                  >
                    {size.label} — {formatPrice(size.price)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-chocolate-700 uppercase tracking-wider mb-3">
              Quantity
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-11 rounded-xl border border-cream-300 flex items-center justify-center text-chocolate-600 hover:bg-cream-200 transition-colors"
              >
                <HiOutlineMinus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-lg font-medium text-chocolate-800">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-11 rounded-xl border border-cream-300 flex items-center justify-center text-chocolate-600 hover:bg-cream-200 transition-colors"
              >
                <HiOutlinePlus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              className="btn-gold flex-1 py-4 text-base"
            >
              Add to Cart — {formatPrice(currentPrice * quantity)}
            </button>
            <button className="w-12 h-12 rounded-xl border border-cream-300 flex items-center justify-center text-chocolate-500 hover:text-rose-500 hover:border-rose-300 transition-colors">
              <HiOutlineHeart className="w-5 h-5" />
            </button>
          </div>

          {/* Allergens */}
          {product.allergens.length > 0 && (
            <div className="mb-6 p-4 bg-cream-200/50 rounded-xl">
              <h3 className="text-xs font-semibold text-chocolate-700 uppercase tracking-wider mb-2">
                Allergens
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs text-chocolate-600 shadow-sm"
                  >
                    {allergenEmojis[allergen]} {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients */}
          <details className="group mb-4">
            <summary className="flex items-center justify-between cursor-pointer py-3 border-t border-cream-200 text-sm font-medium text-chocolate-700">
              Ingredients
              <span className="text-chocolate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-sm text-chocolate-500 pb-3 leading-relaxed">
              {product.ingredients}
            </p>
          </details>

          {/* Dietary */}
          {product.dietary.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.dietary.map((diet) => (
                <span key={diet} className="badge bg-green-100 text-green-700">
                  {diet}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-cream-200">
          <h2 className="heading-md text-chocolate-800 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
