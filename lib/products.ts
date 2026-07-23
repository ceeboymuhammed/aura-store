import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Product } from "@/types/product";

const supabase = createServerSupabaseClient();

/**
 * Fetch a single product by slug
 */
export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  // ---------------------------------------------------
  // Product
  // ---------------------------------------------------

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("status", "active")
    .single();

  if (error || !product) {
    console.error(error);
    return null;
  }

  // ---------------------------------------------------
  // Category
  // ---------------------------------------------------

  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("id", product.category_id)
    .single();

  // ---------------------------------------------------
  // Images
  // ---------------------------------------------------

  const { data: images } = await supabase
    .from("product_images")
    .select("*")
    .eq("product_id", product.id)
    .order("sort_order", { ascending: true });

  const imageList =
    images && images.length
      ? images
      : [
          {
            id: "placeholder",
            product_id: product.id,
            image_url: "/images/placeholder-product.jpg",
            storage_path: "",
            alt_text: product.name,
            sort_order: 1,
            is_primary: true,
          },
        ];

  // ---------------------------------------------------
  // Materials
  // ---------------------------------------------------

  const { data: materials } = await supabase
    .from("product_materials")
    .select("*")
    .eq("product_id", product.id)
    .order("sort_order", { ascending: true });

  // ---------------------------------------------------
  // Specifications
  // ---------------------------------------------------

  const { data: specifications } = await supabase
    .from("product_specifications")
    .select("*")
    .eq("product_id", product.id)
    .order("sort_order", { ascending: true });

  // ---------------------------------------------------
  // Story
  // ---------------------------------------------------

  const { data: story } = await supabase
    .from("product_story_sections")
    .select("*")
    .eq("product_id", product.id)
    .order("sort_order", { ascending: true });

  // ---------------------------------------------------
  // Impact
  // ---------------------------------------------------

  const { data: impacts } = await supabase
    .from("product_impacts")
    .select("*")
    .eq("product_id", product.id)
    .order("sort_order", { ascending: true });

  // ---------------------------------------------------
  // Variants
  // ---------------------------------------------------

  const { data: variants } = await supabase
    .from("product_variants")
    .select("*")
    .eq("product_id", product.id);

  return {
    ...product,

    category: category ?? undefined,

    images: imageList,

    materials: materials ?? [],

    specifications: specifications ?? [],

    impacts: impacts ?? [],

    story: story ?? [],

    variants: variants ?? [],
  };
}

/**
 * Fetch all active products
 */
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("slug")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error(error);
    return [];
  }

  const products = await Promise.all(
    data.map(({ slug }) => getProductBySlug(slug))
  );

  return products.filter(Boolean) as Product[];
}

/**
 * Featured products
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("slug")
    .eq("featured", true)
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error(error);
    return [];
  }

  const products = await Promise.all(
    data.map(({ slug }) => getProductBySlug(slug))
  );

  return products.filter(Boolean) as Product[];
}

/**
 * Products by category
 */
export async function getProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  const { data: category } = await supabase
    .from("categories")
    .select("id")
    .eq("slug", categorySlug)
    .single();

  if (!category) return [];

  const { data, error } = await supabase
    .from("products")
    .select("slug")
    .eq("category_id", category.id)
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error(error);
    return [];
  }

  const products = await Promise.all(
    data.map(({ slug }) => getProductBySlug(slug))
  );

  return products.filter(Boolean) as Product[];
}

/**
 * Related products
 */
export async function getRelatedProducts(
  categoryId: string,
  productId: string,
  limit = 4
): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("slug")
    .eq("category_id", categoryId)
    .eq("status", "active")
    .neq("id", productId)
    .limit(limit);

  if (error || !data) {
    console.error(error);
    return [];
  }

  const products = await Promise.all(
    data.map(({ slug }) => getProductBySlug(slug))
  );

  return products.filter(Boolean) as Product[];
}