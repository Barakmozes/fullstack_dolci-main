"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { useLocale } from "@/lib/useLocale";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/big/325296798_6055180934543683_4479903544277194785_n.webp')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-chocolate-900/60 via-chocolate-900/40 to-chocolate-900/80" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold-400 font-script text-xl md:text-2xl mb-4">
            {t("hero.welcomeTo")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream-100 mb-6 tracking-tight"
        >
          {t("hero.heading1")}
          <br />
          <span className="text-gold-400">{t("hero.heading2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream-200/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/menu" className="btn-gold px-8 py-4 text-base">
            {t("hero.exploreMenu")}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream-200/40 text-cream-100 font-sans font-medium rounded-full transition-all duration-300 hover:bg-cream-100/10 hover:border-cream-200/60"
          >
            {t("hero.ourStory")}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-cream-200/60"
        >
          <span className="text-xs font-sans tracking-widest uppercase">
            {t("hero.scroll")}
          </span>
          <HiArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
