"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Locale = "en" | "he";

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

function applyLocaleToDOM(locale: Locale) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
  }
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: "en",

      setLocale: (locale) => {
        applyLocaleToDOM(locale);
        set({ locale });
      },

      toggleLocale: () => {
        const next = get().locale === "en" ? "he" : "en";
        applyLocaleToDOM(next);
        set({ locale: next });
      },
    }),
    {
      name: "dolci-locale",
      skipHydration: true,
    }
  )
);
