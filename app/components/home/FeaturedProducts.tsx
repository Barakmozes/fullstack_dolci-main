"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import ProductCard from "@/app/components/menu/ProductCard";
import type { Product } from "@/data/types";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function FeaturedProducts({
  products,
  title = "Our Best Sellers",
  subtitle = "The most loved creations from our kitchen, chosen by our customers time and time again.",
}: FeaturedProductsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={ref} className="section-padding bg-cream-100">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
        >
          <div>
            <span className="text-gold-500 font-script text-lg">Favorites</span>
            <h2 className="heading-lg text-chocolate-800 mt-1">{title}</h2>
            <p className="text-body mt-2 max-w-lg">{subtitle}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-chocolate-200 flex items-center justify-center text-chocolate-600 hover:bg-chocolate-800 hover:text-cream-100 hover:border-chocolate-800 transition-all"
                aria-label="Scroll left"
              >
                <HiArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-chocolate-200 flex items-center justify-center text-chocolate-600 hover:bg-chocolate-800 hover:text-cream-100 hover:border-chocolate-800 transition-all"
                aria-label="Scroll right"
              >
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
            <Link
              href="/menu"
              className="text-sm font-medium text-gold-600 hover:text-gold-700 flex items-center gap-1 transition-colors"
            >
              View All
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Products Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] snap-start"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
