import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import BottomNav from "@/app/components/layout/BottomNav";
import CartDrawer from "@/app/components/cart/CartDrawer";
import HeroSection from "@/app/components/home/HeroSection";
import FeaturedProducts from "@/app/components/home/FeaturedProducts";
import CategoryShowcase from "@/app/components/home/CategoryShowcase";
import Testimonials from "@/app/components/home/Testimonials";
import Newsletter from "@/app/components/home/Newsletter";
import Providers from "@/app/Providers";
import { getBestSellers, getCategories, getTestimonials, getNewArrivals } from "@/lib/services/products";

export default async function HomePage() {
  const [bestSellers, categories, testimonials, newArrivals] = await Promise.all([
    getBestSellers(),
    getCategories(),
    getTestimonials(),
    getNewArrivals(),
  ]);

  return (
    <Providers>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts
          products={bestSellers}
          title="Our Best Sellers"
          subtitle="The most loved creations from our kitchen, chosen by our customers time and time again."
        />
        <CategoryShowcase categories={categories} />
        {newArrivals.length > 0 && (
          <FeaturedProducts
            products={newArrivals}
            title="New Arrivals"
            subtitle="Fresh from our kitchen — discover our latest creations and seasonal inspirations."
          />
        )}
        <Testimonials testimonials={testimonials} />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <BottomNav />
    </Providers>
  );
}
