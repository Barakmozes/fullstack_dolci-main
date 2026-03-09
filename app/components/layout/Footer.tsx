"use client";

import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { useLocale } from "@/lib/useLocale";

export default function Footer() {
  const { t } = useLocale();

  const quickLinks = [
    { href: "/menu", label: t("footer.ourMenu") },
    { href: "/about", label: t("footer.ourStory") },
    { href: "/contact", label: t("footer.contactUs") },
    { href: "/faqs", label: t("footer.faqs") },
  ];

  const categories = [
    { href: "/menu?category=cakes", label: t("footer.cakes") },
    { href: "/menu?category=pastries", label: t("footer.pastries") },
    { href: "/menu?category=viennoiserie", label: t("footer.viennoiserie") },
    { href: "/menu?category=gift-boxes", label: t("footer.giftBoxes") },
  ];

  return (
    <footer className="bg-chocolate-800 text-cream-200">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-cream-100 mb-2">
              DOLCI
            </h3>
            <p className="text-sm tracking-[0.15em] uppercase text-gold-400 mb-4">
              {t("header.artisanBakery")}
            </p>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              {t("footer.brandDesc")}
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream-600 flex items-center justify-center text-cream-400 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-6">
              {t("footer.categories")}
            </h4>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-6">
              {t("footer.visitUs")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-cream-300 text-sm">
                  {t("footer.address")}<br />{t("footer.city")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-cream-300 text-sm">03-555-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineMail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-cream-300 text-sm">hello@dolci.co.il</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-chocolate-700">
              <p className="text-xs text-cream-400">
                {t("footer.hours")}<br />
                {t("footer.hoursFri")}<br />
                {t("footer.hoursSat")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-chocolate-700">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-500">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-cream-500 hover:text-gold-400 transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-xs text-cream-500 hover:text-gold-400 transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
