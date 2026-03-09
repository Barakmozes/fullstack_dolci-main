"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiOutlinePlus, HiOutlineMinus, HiOutlineTrash } from "react-icons/hi";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  const total = totalPrice();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-chocolate-900/50 backdrop-blur-sm z-[80]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-cream-50 z-[90] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream-200">
              <div>
                <h2 className="text-xl font-serif font-bold text-chocolate-800">
                  Your Cart
                </h2>
                <p className="text-sm text-chocolate-400 mt-0.5">
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-cream-200 text-chocolate-600 transition-colors"
                aria-label="Close cart"
              >
                <HiOutlineX className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-5xl mb-4">🎂</p>
                  <h3 className="font-serif text-lg text-chocolate-700 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-chocolate-400 mb-6">
                    Time to treat yourself to something sweet!
                  </p>
                  <Link
                    href="/menu"
                    onClick={closeCart}
                    className="btn-primary text-sm"
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const price = item.selectedSize?.price ?? item.product.price;
                    const key = `${item.product.id}-${item.selectedSize?.id || "default"}`;

                    return (
                      <motion.div
                        key={key}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 bg-white rounded-xl p-3 shadow-soft"
                      >
                        {/* Image */}
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-cream-200">
                          <Image
                            src={item.product.thumbnail}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif font-semibold text-sm text-chocolate-800 truncate">
                            {item.product.name}
                          </h4>
                          {item.selectedSize && (
                            <p className="text-xs text-chocolate-400">
                              {item.selectedSize.label}
                            </p>
                          )}
                          <p className="text-sm font-semibold text-gold-600 mt-1">
                            {formatPrice(price * item.quantity)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1,
                                    item.selectedSize?.id
                                  )
                                }
                                className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center text-chocolate-600 hover:bg-cream-200 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <HiOutlineMinus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium text-chocolate-800 w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1,
                                    item.selectedSize?.id
                                  )
                                }
                                className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center text-chocolate-600 hover:bg-cream-200 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <HiOutlinePlus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() =>
                                removeItem(item.product.id, item.selectedSize?.id)
                              }
                              className="p-1.5 text-chocolate-400 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <HiOutlineTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-cream-200 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-chocolate-600">Subtotal</span>
                  <span className="text-lg font-serif font-bold text-chocolate-800">
                    {formatPrice(total)}
                  </span>
                </div>
                <p className="text-xs text-chocolate-400">
                  Delivery fee calculated at checkout
                </p>
                <button
                  className="btn-gold w-full py-3.5 text-base"
                  onClick={() => {
                    closeCart();
                    // Navigate to checkout (demo)
                  }}
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-chocolate-400 hover:text-red-500 transition-colors py-1"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
