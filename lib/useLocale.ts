"use client";

import { useLocaleStore } from "./locale-store";
import translations, { type TranslationKey } from "./translations";

export function useLocale() {
  const locale = useLocaleStore((s) => s.locale);
  const toggleLocale = useLocaleStore((s) => s.toggleLocale);
  const setLocale = useLocaleStore((s) => s.setLocale);

  const t = (key: TranslationKey): string => {
    return translations[locale][key] ?? key;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const localized = (obj: any, field: string): string => {
    if (locale === "he") {
      const heKey = `${field}He`;
      if (obj[heKey] && typeof obj[heKey] === "string") {
        return obj[heKey] as string;
      }
    }
    return (obj[field] as string) ?? "";
  };

  return {
    locale,
    toggleLocale,
    setLocale,
    t,
    localized,
    dir: locale === "he" ? "rtl" : "ltr",
    isRtl: locale === "he",
  } as const;
}
