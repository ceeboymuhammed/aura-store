import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";

/* ---------------------------------------------------------- */
/* Fetch Product By Slug (With Related Relations) */
/* ---------------------------------------------------------- */

export const getProductBySlug = cache(async (slug: string) => {
  const supabase = await createServerSupabaseClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("status", "active")
    .single();

  if (error || !product) return null;

  const [
    category,
    images,
    materials,
    specifications,
    story,
    impacts,
  ] = await Promise.all([
    supabase
      .from("categories")
      .select("*")
      .eq("id", product.category_id)
      .single(),

    supabase
      .from("product_images")
      .select("*")
      .eq("product_id", product.id)
      .order("sort_order"),

    supabase
      .from("product_materials")
      .select("*")
      .eq("product_id", product.id)
      .order("sort_order"),

    supabase
      .from("product_specifications")
      .select("*")
      .eq("product_id", product.id)
      .order("sort_order"),

    supabase
      .from("product_story_sections")
      .select("*")
      .eq("product_id", product.id)
      .order("sort_order"),

    supabase
      .from("product_impacts")
      .select("*")
      .eq("product_id", product.id)
      .order("sort_order"),
  ]);

  return {
    ...product,
    category: category.data ?? undefined,
    images: images.data ?? [],
    materials: materials.data ?? [],
    specifications: specifications.data ?? [],
    story: story.data ?? [],
    impacts: impacts.data ?? [],
    variants: [], // Safe fallback since variants table does not exist
  };
});

/* ---------------------------------------------------------- */
/* Fetch All Products (Joined with Images and Category) */
/* ---------------------------------------------------------- */

export const getAllProducts = cache(async () => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*),
      images:product_images(*)
    `)
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return data;
});

/* ---------------------------------------------------------- */
/* Fetch Related Products */
/* ---------------------------------------------------------- */

export const getRelatedProducts = cache(async (currentProductId: string) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*),
      images:product_images(*)
    `)
    .eq("status", "active")
    .neq("id", currentProductId)
    .limit(4);

  if (error || !data) return [];

  return data;
});