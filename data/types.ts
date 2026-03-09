// =============================================================================
// DOLCI Premium Pastry Shop - Type Definitions
// =============================================================================

// ---------------------------------------------------------------------------
// Category Types
// ---------------------------------------------------------------------------

export type CategorySlug =
  | "cakes"
  | "pastries"
  | "cookies"
  | "breads"
  | "viennoiserie"
  | "seasonal"
  | "gift-boxes";

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  nameHe: string;
  description: string;
  descriptionHe: string;
  image: string;
  productCount: number;
  sortOrder: number;
}

// ---------------------------------------------------------------------------
// Product Types
// ---------------------------------------------------------------------------

export type ProductTag =
  | "new"
  | "best-seller"
  | "chefs-pick"
  | "limited"
  | "seasonal";

export type Allergen =
  | "gluten"
  | "dairy"
  | "eggs"
  | "nuts"
  | "soy"
  | "sesame";

export type DietaryInfo =
  | "vegan"
  | "gluten-free"
  | "sugar-free"
  | "nut-free";

export interface NutritionalInfo {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  sugar: number;
}

export interface ProductSize {
  id: string;
  label: string;
  price: number;
}

export interface CustomizationOption {
  id: string;
  label: string;
  labelHe: string;
  type: "text" | "select" | "number";
  options?: string[];
  maxLength?: number;
  priceModifier?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameHe: string;
  description: string;
  descriptionHe: string;
  price: number;
  originalPrice?: number;
  currency: "ILS";
  images: string[];
  thumbnail: string;
  category: CategorySlug;
  tags: ProductTag[];
  badges: string[];
  allergens: Allergen[];
  dietary: DietaryInfo[];
  ingredients: string;
  ingredientsHe: string;
  nutritionalInfo?: NutritionalInfo;
  sizes?: ProductSize[];
  customizable: boolean;
  customizationOptions?: CustomizationOption[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  sortOrder: number;
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Testimonial Types
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  nameHe: string;
  text: string;
  textHe: string;
  rating: number;
  image?: string;
  date: string;
  productId?: string;
}

// ---------------------------------------------------------------------------
// Store Info Types
// ---------------------------------------------------------------------------

export interface StoreHours {
  day: string;
  dayHe: string;
  open: string;
  close: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface StoreInfo {
  name: string;
  nameHe: string;
  address: string;
  addressHe: string;
  phone: string;
  email: string;
  hours: StoreHours[];
  socialMedia: SocialMediaLink[];
}

// ---------------------------------------------------------------------------
// Cart Types
// ---------------------------------------------------------------------------

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: ProductSize;
  customizations?: Record<string, string>;
}

// ---------------------------------------------------------------------------
// Featured Collection Types
// ---------------------------------------------------------------------------

export interface FeaturedCollection {
  id: string;
  title: string;
  titleHe: string;
  description: string;
  descriptionHe: string;
  productIds: string[];
}
