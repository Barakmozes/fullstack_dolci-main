"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/useLocale";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  scrolled?: boolean;
}

export default function LanguageToggle({ scrolled = false }: LanguageToggleProps) {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "relative flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border",
        scrolled
          ? "border-cream-300 text-chocolate-700 hover:bg-cream-200"
          : "border-cream-200/30 text-white hover:bg-white/10"
      )}
      aria-label={locale === "en" ? "Switch to Hebrew" : "Switch to English"}
    >
      <motion.span
        key={locale}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.2 }}
        className="font-semibold"
      >
        {locale === "en" ? "עב" : "EN"}
      </motion.span>
    </button>
  );
}
