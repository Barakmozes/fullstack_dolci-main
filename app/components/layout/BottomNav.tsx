"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineHome, HiOutlineViewGrid, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: HiOutlineHome, label: "Home" },
  { href: "/menu", icon: HiOutlineViewGrid, label: "Menu" },
  { href: "#cart", icon: HiOutlineShoppingBag, label: "Cart", isCart: true },
  { href: "/account", icon: HiOutlineUser, label: "Account" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const totalItems = useCartStore((s) => s.totalItems());
  const openCart = useCartStore((s) => s.openCart);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-cream-300 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const isActive = item.href === pathname;
          const Icon = item.icon;

          if (item.isCart) {
            return (
              <button
                key={item.label}
                onClick={openCart}
                className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
              >
                <div className="relative">
                  <Icon className={cn("w-6 h-6", "text-chocolate-500")} />
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-gold-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </div>
                <span className="text-[10px] font-medium text-chocolate-500">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
            >
              <Icon
                className={cn(
                  "w-6 h-6 transition-colors",
                  isActive ? "text-gold-500" : "text-chocolate-400"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-gold-600" : "text-chocolate-400"
                )}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottomnav-indicator"
                  className="absolute -top-0.5 w-8 h-0.5 bg-gold-500 rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
