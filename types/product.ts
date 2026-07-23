// =====================================================
// AURA STORE
// Product Types
// Matches Supabase Database Schema
// =====================================================

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  created_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;

  image_url: string;
  storage_path: string;

  alt_text: string;

  sort_order: number;

  is_primary: boolean;
}

export interface ProductMaterial {
  id: string;
  product_id: string;

  material: string;

  percentage: number | null;

  sort_order: number;
}

export interface ProductSpecification {
  id: string;
  product_id: string;

  specification: string;

  value: string;

  sort_order: number;
}

export interface ProductImpact {
  id: string;
  product_id: string;

  title: string;

  value: string;

  icon: string | null;

  sort_order: number;
}

export interface ProductStorySection {
  id: string;
  product_id: string;

  heading: string;

  body: string;

  sort_order: number;
}

export interface ProductVariant {
  id: string;
  product_id: string;

  variant_name: string;

  variant_value: string;

  price: number | null;

  stock: number;
}

export interface Product {

  id: string;

  category_id: string;

  sku: string;

  name: string;

  slug: string;

  short_description: string;

  description: string;

  price: number;

  featured: boolean;

  status: string;

  seo_title: string | null;

  seo_description: string | null;

  created_at?: string;

  updated_at?: string;

  category?: Category;

  images: ProductImage[];

  materials: ProductMaterial[];

  specifications: ProductSpecification[];

  impacts: ProductImpact[];

  story: ProductStorySection[];

  variants: ProductVariant[];
}