import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import type { Product, Category, CategorySlug, Testimonial } from "@/data/types";

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getProductsByCategory(category: CategorySlug): Promise<Product[]> {
  return products.filter((p) => p.category === category);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((p) => p.featured);
}

export async function getBestSellers(): Promise<Product[]> {
  return products.filter((p) => p.tags.includes("best-seller"));
}

export async function getNewArrivals(): Promise<Product[]> {
  return products.filter((p) => p.tags.includes("new"));
}

export async function getChefsPicks(): Promise<Product[]> {
  return products.filter((p) => p.tags.includes("chefs-pick"));
}

export async function getRelatedProducts(product: Product, limit: number = 4): Promise<Product[]> {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export async function getCategories(): Promise<Category[]> {
  return categories.sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getCategoryBySlug(slug: CategorySlug): Promise<Category | null> {
  return categories.find((c) => c.slug === slug) ?? null;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.nameHe.includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.category.includes(q)
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}
