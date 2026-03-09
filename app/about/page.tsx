import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import BottomNav from "@/app/components/layout/BottomNav";
import CartDrawer from "@/app/components/cart/CartDrawer";
import Providers from "@/app/Providers";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "Our Story | DOLCI Artisan Bakery",
  description:
    "Discover the story behind DOLCI — where passion meets perfection in every handcrafted pastry.",
};

export default function AboutPage() {
  return (
    <Providers>
      <Header />
      <main className="pt-20 pb-24 md:pb-12">
        <AboutContent />
      </main>
      <Footer />
      <CartDrawer />
      <BottomNav />
    </Providers>
  );
}
