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
          {/* Page Header */}
          <div className="text-center mb-10">
            <span className="text-gold-500 font-script text-lg">Discover</span>
            <h1 className="heading-xl text-chocolate-800 mt-1">Our Menu</h1>
            <p className="text-body mt-3 max-w-xl mx-auto">
              Every item is handcrafted daily with the finest ingredients,
              made with passion and served with love.
            </p>
          </div>

          <MenuPageClient products={products} categories={categories} />
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <BottomNav />
    </Providers>
  );
}
