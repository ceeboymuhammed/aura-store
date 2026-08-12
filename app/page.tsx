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
  title: "AURA Store | UpwardEco",
  description:
    "Explore handcrafted sustainable products made from recovered materials.",
};

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* ⚡ TOP MARKETING BANNER */}
      <div className="bg-slate-900 text-white text-center py-2 text-xs font-semibold tracking-wide px-4">
        ⚡ FREE NATIONWIDE SHIPPING ON ORDERS OVER ₦50,000
      </div>

      {/* 🌍 ENVIRONMENTAL IMPACT TICKER */}
      <div className="bg-emerald-700 text-white text-center py-2.5 text-xs font-medium tracking-wider flex justify-center items-center gap-2 px-4">
        <span>🌍</span> OVER 2,500 KG OF WASTE REDIVERTED & INITIATED
      </div>

      <Container>
        {/* SHOP SEARCH & CATEGORY FILTERS */}
        <div className="py-6">
          <div className="mb-4">
            <ShopSearch />
          </div>

          {/* Category Filter Track */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-2 border-b border-slate-100">
            <Link
              href="/"
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                !category
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Items
            </Link>

            {categories.map((item) => (
              <Link
                key={item.id}
                href={`/?category=${item.slug}`}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                  category === item.slug
                    ? "bg-emerald-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 🛍️ PRODUCT GRID */}
        <div className="pb-16">
          <ProductGrid products={products} />
        </div>
      </Container>

    </div>
  );
}