import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import BottomNav from "@/app/components/layout/BottomNav";
import CartDrawer from "@/app/components/cart/CartDrawer";
import Providers from "@/app/Providers";
import MenuPageClient from "./MenuPageClient";
import { getAllProducts, getCategories } from "@/lib/services/products";

export const metadata = {
  title: "Menu | DOLCI Artisan Bakery",
  description: "Explore our full collection of handcrafted pastries, cakes, cookies, breads, and more.",
};

export default async function MenuPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  return (
    <Providers>
      <Header />
      <main className="pt-24 pb-24 md:pb-12">
        <div className="container-custom">
          <MenuPageClient products={products} categories={categories} />
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <BottomNav />
    </Providers>
  );
}
