import { notFound } from "next/navigation";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import BottomNav from "@/app/components/layout/BottomNav";
import CartDrawer from "@/app/components/cart/CartDrawer";
import Providers from "@/app/Providers";
import ProductDetailClient from "./ProductDetailClient";
import { getProductBySlug, getRelatedProducts, getAllProducts } from "@/lib/services/products";
import type { Metadata } from "next";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found | DOLCI" };
  return {
    title: `${product.name} | DOLCI Artisan Bakery`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(product, 4);

  return (
    <Providers>
      <Header />
      <main className="pt-20 pb-24 md:pb-12">
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
      <CartDrawer />
      <BottomNav />
    </Providers>
  );
}
