import { cache } from "react";
import type { Category } from "@/types/product";
import { createServerSupabaseClient } from "@/lib/supabase/server";

import type { Product } from "@/types/product";

/* ---------------------------------------------------------- */
/* Product By Slug */
/* ---------------------------------------------------------- */

export const getProductBySlug = cache(
  async (slug: string): Promise<Product | null> => {
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
      variants,
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

      supabase
        .from("product_variants")
        .select("*")
        .eq("product_id", product.id),
    ]);

    return {
      ...product,
      category: category.data ?? undefined,
      images: images.data ?? [],
      materials: materials.data ?? [],
      specifications: specifications.data ?? [],
      story: story.data ?? [],
      impacts: impacts.data ?? [],
      variants: variants.data ?? [],
    };
  }
);

/* ---------------------------------------------------------- */
/* All Products */
/* ---------------------------------------------------------- */

export const getAllProducts = cache(async (): Promise<Product[]> => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("products")
    .select("slug")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  const products = await Promise.all(
    data.map((p) => getProductBySlug(p.slug))
  );

  return products.filter(Boolean) as Product[];
});

/* ---------------------------------------------------------- */
/* Featured */
/* ---------------------------------------------------------- */

export const getFeaturedProducts = cache(async (): Promise<Product[]> => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("products")
    .select("slug")
    .eq("featured", true)
    .eq("status", "active");

  if (error || !data) return [];

  const products = await Promise.all(
    data.map((p) => getProductBySlug(p.slug))
  );

  return products.filter(Boolean) as Product[];
});

/* ---------------------------------------------------------- */
/* Category */
/* ---------------------------------------------------------- */

export async function getProductsByCategory(
  slug: string
): Promise<Product[]> {
  const supabase = await createServerSupabaseClient();

  const { data: category } = await supabase
    .from("categories")
    .select("id")
    .eq("slug", slug)
    .single();

  if (!category) {
    return [];
  }

  const { data } = await supabase
    .from("products")
    .select("slug")
    .eq("category_id", category.id)
    .eq("status", "active")
    .order("created_at", {
      ascending: false,
    });

  if (!data) {
    return [];
  }

  const products = await Promise.all(
    data.map((product) =>
      getProductBySlug(product.slug)
    )
  );

  return products.filter(Boolean) as Product[];
}

/* ---------------------------------------------------------- */
/* Related */
/* ---------------------------------------------------------- */

export const getRelatedProducts = cache(
  async (
    productId: string,
    limit = 4
  ): Promise<Product[]> => {
    const supabase = await createServerSupabaseClient();

    const { data } = await supabase
      .from("products")
      .select("slug")
      .neq("id", productId)
      .eq("status", "active")
      .limit(limit);

    if (!data) return [];

    const products = await Promise.all(
      data.map((p) => getProductBySlug(p.slug))
    );

    return products.filter(Boolean) as Product[];
  }
);

/* ---------------------------------------------------------- */
/* Categories */
/* ---------------------------------------------------------- */

export async function getCategories(): Promise<Category[]> {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error || !data) {
    return [];
  }

  return data;
}

/* ---------------------------------------------------------- */
/* Search */
/* ---------------------------------------------------------- */

export async function searchProducts(
  query: string
): Promise<Product[]> {
  const supabase = await createServerSupabaseClient();

  const { data } = await supabase
    .from("products")
    .select("slug")
    .ilike("name", `%${query}%`)
    .eq("status", "active");

  if (!data) return [];

  const products = await Promise.all(
    data.map((product) =>
      getProductBySlug(product.slug)
    )
  );

  return products.filter(Boolean) as Product[];
}