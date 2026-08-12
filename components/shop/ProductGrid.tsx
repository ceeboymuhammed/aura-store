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
      <div className="rounded-3xl border border-slate-200 bg-slate-50 py-16 text-center">
        <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
          No products found
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          We couldn't find any products in this collection.
        </p>
      </div>
    );
  }

  return (
    /* 🎯 3 columns on mobile (grid-cols-3) with tight gap spacing (gap-2.5) */
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}