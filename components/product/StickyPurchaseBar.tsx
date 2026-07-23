"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

import Button from "@/components/ui/Button";

interface Props {
  product: Product;
}

export default function StickyPurchaseBar({
  product,
}: Props) {
  const { addItem } = useCart();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const image =
    product.images.find((i) => i.is_primary) ??
    product.images[0];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-xl transition duration-300 ${
        visible
          ? "translate-y-0"
          : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        <div className="flex items-center gap-4">

          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">

            <Image
              src={
                image?.image_url ??
                "/product-placeholder.jpg"
              }
              alt={product.name}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <h3 className="font-bold">
              {product.name}
            </h3>

            <p className="font-semibold text-green-700">
              ₦{product.price.toLocaleString()}
            </p>

          </div>

        </div>

        <Button
          onClick={() =>
            addItem({
              id: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image:
                image?.image_url ??
                "/product-placeholder.jpg",
            })
          }
        >
          Add to Cart
        </Button>

      </div>
    </div>
  );
}