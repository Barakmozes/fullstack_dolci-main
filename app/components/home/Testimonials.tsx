"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "@/lib/useLocale";
import type { Testimonial } from "@/data/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "text-gold-500" : "text-cream-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, localized } = useLocale();

  return (
    <section ref={ref} className="section-padding bg-cream-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 font-script text-lg">{t("testimonials.sectionLabel")}</span>
          <h2 className="heading-lg text-chocolate-800 mt-1">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              {/* Quote mark */}
              <span className="text-4xl text-gold-300 font-serif leading-none block mb-3">
                &ldquo;
              </span>

              <p className="text-chocolate-600 text-sm leading-relaxed mb-4">
                {localized(testimonial, "text")}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-serif font-bold text-sm">
                    {localized(testimonial, "name").charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-chocolate-800">
                      {localized(testimonial, "name")}
                    </p>
                    <p className="text-xs text-chocolate-400">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
