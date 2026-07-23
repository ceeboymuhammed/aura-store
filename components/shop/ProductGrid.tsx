"use client";

import type { Product } from "@/types/product";

import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 py-24 text-center">

        <h2 className="text-3xl font-bold text-slate-900">
          No products found
        </h2>

        <p className="mt-4 text-slate-600">
          We couldn't find any products in this collection.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}