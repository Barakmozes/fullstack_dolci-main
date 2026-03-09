"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductSize, CartItem } from "@/data/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (product: Product, quantity?: number, selectedSize?: ProductSize, customizations?: Record<string, string>) => void;
  removeItem: (productId: string, sizeId?: string) => void;
  updateQuantity: (productId: string, quantity: number, sizeId?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;

  // Computed
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1, selectedSize, customizations) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) =>
              item.product.id === product.id &&
              item.selectedSize?.id === selectedSize?.id
          );

          if (existingIndex > -1) {
            const newItems = [...state.items];
            newItems[existingIndex] = {
              ...newItems[existingIndex],
              quantity: newItems[existingIndex].quantity + quantity,
            };
            return { items: newItems };
          }

          return {
            items: [
              ...state.items,
              { product, quantity, selectedSize, customizations },
            ],
          };
        });
      },

      removeItem: (productId, sizeId) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(item.product.id === productId && item.selectedSize?.id === sizeId)
          ),
        }));
      },

      updateQuantity: (productId, quantity, sizeId) => {
        if (quantity <= 0) {
          get().removeItem(productId, sizeId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId && item.selectedSize?.id === sizeId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      totalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      totalPrice: () => {
        return get().items.reduce((sum, item) => {
          const price = item.selectedSize?.price ?? item.product.price;
          return sum + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: "dolci-cart",
      skipHydration: true,
    }
  )
);
