"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useCartStore } from "@/lib/cart-store";
import { useLocaleStore } from "@/lib/locale-store";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useCartStore.persist.rehydrate();
    useLocaleStore.persist.rehydrate();
  }, []);

  // Sync locale to DOM on mount
  useEffect(() => {
    const locale = useLocaleStore.getState().locale;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
  }, []);

  return (
    <>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#3C2415",
            color: "#FFF8F0",
            borderRadius: "9999px",
            padding: "12px 24px",
            fontSize: "14px",
            fontFamily: "DM Sans, sans-serif",
          },
          success: {
            iconTheme: {
              primary: "#C8956C",
              secondary: "#FFF8F0",
            },
          },
        }}
      />
    </>
  );
}
