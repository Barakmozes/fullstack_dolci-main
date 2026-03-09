"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineShoppingBag, HiOutlineSearch, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", labelHe: "\u05D1\u05D9\u05EA" },
  { href: "/menu", label: "Menu", labelHe: "\u05EA\u05E4\u05E8\u05D9\u05D8" },
  { href: "/about", label: "About", labelHe: "\u05D0\u05D5\u05D3\u05D5\u05EA" },
  { href: "/contact", label: "Contact", labelHe: "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-soft py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className={cn(
              "text-3xl font-serif font-bold tracking-wider transition-colors duration-300",
              scrolled ? "text-chocolate-800" : "text-white"
            )}>
              DOLCI
            </span>
            <span className={cn(
              "hidden sm:block text-xs font-sans tracking-[0.2em] uppercase transition-colors duration-300",
              scrolled ? "text-gold-600" : "text-gold-300"
            )}>
              Artisan Bakery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold-500 relative group",
                  scrolled ? "text-chocolate-700" : "text-white/90"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              className={cn(
                "p-2 rounded-full transition-all duration-300 hover:bg-white/10",
                scrolled ? "text-chocolate-700 hover:bg-chocolate-100" : "text-white"
              )}
              aria-label="Search"
            >
              <HiOutlineSearch className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className={cn(
                "p-2 rounded-full transition-all duration-300 hover:bg-white/10 relative",
                scrolled ? "text-chocolate-700 hover:bg-chocolate-100" : "text-white"
              )}
              aria-label={`Cart (${totalItems} items)`}
            >
              <HiOutlineShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "md:hidden p-2 rounded-full transition-all duration-300",
                scrolled ? "text-chocolate-700" : "text-white"
              )}
              aria-label="Open menu"
            >
              <HiOutlineMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-chocolate-900/50 backdrop-blur-sm z-[60]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-cream-100 z-[70] shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-2xl font-serif font-bold text-chocolate-800">
                    DOLCI
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-cream-200 text-chocolate-700"
                    aria-label="Close menu"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-4 px-4 text-lg font-medium text-chocolate-700 hover:text-gold-600 hover:bg-cream-200 rounded-xl transition-all"
                      >
                        <span>{link.label}</span>
                        <span className="text-sm text-chocolate-400">{link.labelHe}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-cream-300">
                  <p className="text-sm text-chocolate-400 font-sans">
                    Premium Artisan Bakery
                  </p>
                  <p className="text-sm text-chocolate-400 font-sans mt-1">
                    Tel Aviv, Israel
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
