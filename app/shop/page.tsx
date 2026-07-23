import type { Metadata } from "next";
import Link from "next/link";

import ProductGrid from "@/components/shop/ProductGrid";
import ShopSearch from "@/components/shop/ShopSearch";
import Container from "@/components/ui/Container";

import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
  searchProducts,
} from "@/lib/queries/products";

export const metadata: Metadata = {
  title: "Shop | AURA Store",
  description:
    "Explore handcrafted sustainable products made from recovered materials.",
};

interface ShopPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
}

export default async function ShopPage({
  searchParams,
}: ShopPageProps) {
  const { category, search } = await searchParams;

  let products;

  if (search) {
    products = await searchProducts(search);
  } else if (category) {
    products = await getProductsByCategory(category);
  } else {
    products = await getAllProducts();
  }

  const categories = await getCategories();

  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">
            Collection
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
            {category
              ? category
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())
              : "All Products"}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Thoughtfully handcrafted products made from recovered materials.
          </p>
        </div>

        <div className="mb-8">
          <ShopSearch />
        </div>

        <div className="mb-14 flex flex-wrap items-center gap-3 border-y border-slate-200 py-6">
          <Link
            href="/shop"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              !category
                ? "bg-green-700 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All
          </Link>

          {categories.map((item) => (
            <Link
              key={item.id}
              href={`/shop?category=${item.slug}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                category === item.slug
                  ? "bg-green-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <ProductGrid products={products} />
      </Container>
    </section>
  );
}