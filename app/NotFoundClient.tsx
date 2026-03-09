"use client";

import Link from "next/link";
import { useLocale } from "@/lib/useLocale";

export default function NotFoundClient() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100">
      <div className="text-center px-4">
        <p className="text-8xl mb-6">🍪</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate-800 mb-4">
          {t("notFound.title")}
        </h1>
        <p className="text-chocolate-500 text-lg mb-8 max-w-md mx-auto">
          {t("notFound.message")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-3">
            {t("notFound.goHome")}
          </Link>
          <Link href="/menu" className="btn-secondary px-8 py-3">
            {t("notFound.browseMenu")}
          </Link>
        </div>
      </div>
    </div>
  );
}
