import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOLCI | Premium Artisan Pastry & Bakery",
  description:
    "Handcrafted pastries, cakes, and baked goods made with love and the finest ingredients. Order online from Tel Aviv's most beloved bakery.",
  keywords: [
    "bakery",
    "pastry",
    "cakes",
    "Tel Aviv",
    "artisan",
    "dolci",
    "croissant",
    "macarons",
  ],
  icons: {
    icon: "/img/logo_n.png",
    apple: "/img/logo_n.png",
  },
  openGraph: {
    title: "DOLCI | Premium Artisan Pastry & Bakery",
    description:
      "Handcrafted pastries, cakes, and baked goods made with love.",
    type: "website",
    locale: "he_IL",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col texture-linen">
        {children}
      </body>
    </html>
  );
}
