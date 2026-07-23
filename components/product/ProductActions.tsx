"use client";

import { useCart } from "@/context/CartContext";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductActions({ product }: Props) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image:
            product.images?.find((i) => i.is_primary)?.image_url ||
            product.images?.[0]?.image_url ||
            "/images/product-placeholder.jpg",
        })
      }
      className="w-full rounded-xl bg-brand-green py-4 text-lg font-semibold text-white transition hover:bg-green-700"
    >
      Add to Cart
    </button>
  );
}