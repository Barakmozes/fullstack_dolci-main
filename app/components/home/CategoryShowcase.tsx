"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { Category } from "@/data/types";

// Map category slugs to bakery images from existing assets
const categoryImages: Record<string, string> = {
  cakes: "/img/big/324860600_565541368764551_4472766876171986667_n.webp",
  pastries: "/img/big/326172900_879768583258988_4761774091074188759_n.webp",
  cookies: "/img/big/336947827_740220224228139_5822508374678524526_n.webp",
  breads: "/img/big/338289865_1559868654535291_437119550887817844_n.webp",
  viennoiserie:
    "/img/big/324387906_539849348167967_3700461515002332041_n.webp",
  seasonal:
    "/img/big/329805507_618930263542400_564250505725633671_n.webp",
  "gift-boxes":
    "/img/big/337248563_173176071796964_7668308429815898275_n.webp",
};

interface CategoryShowcaseProps {
  categories: Category[];
}

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 font-script text-lg">Explore</span>
          <h2 className="heading-lg text-chocolate-800 mt-1">Our Collections</h2>
          <p className="text-body mt-3 max-w-xl mx-auto">
            From delicate viennoiserie to showstopping celebration cakes — discover
            our world of handcrafted delights.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/menu?category=${category.slug}`}
                className="group block relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src={
                    categoryImages[category.slug] ||
                    "/img/big/324860600_565541368764551_4472766876171986667_n.webp"
                  }
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 via-chocolate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-serif font-bold text-cream-100 text-lg md:text-xl mb-1">
                    {category.name}
                  </h3>
                  <p className="text-cream-200/80 text-xs md:text-sm line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-2 text-gold-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
