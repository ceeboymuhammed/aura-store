"use client";

import { useState } from "react";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/shop/WhatsAppButton";

import {
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  Leaf,
  CheckCircle,
} from "@/components/ui/Icon";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);

  const image =
    product.images?.find((img) => img.is_primary) ??
    product.images?.[0];

  // 🎯 Direct Price from Supabase products.price
  const price = Number(product.price ?? 0);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price,
        image:
          image?.image_url ??
          "/product-placeholder.jpg",
      });
    }
  }

  return (
    <div className="lg:sticky lg:top-24">
      {product.category && (
        <Badge variant="secondary">
          {product.category.name}
        </Badge>
      )}

      <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-charcoal">
        {product.name}
      </h1>

      <p className="mt-5 text-lg leading-8 text-neutral-600">
        {product.short_description}
      </p>

      {/* Pricing Block */}
      <div className="mt-8">
        <p className="text-sm uppercase tracking-wider text-neutral-500">
          Price
        </p>

        <div className="mt-2 flex items-baseline gap-3 flex-wrap">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-green">
            ₦{price.toLocaleString()}
          </h2>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-4 font-semibold">
          Quantity
        </h3>

        <div className="flex w-fit items-center rounded-full border border-neutral-300">
          <button
            onClick={() =>
              setQuantity((q) =>
                Math.max(1, q - 1)
              )
            }
            className="p-4"
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="w-12 text-center font-semibold">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity((q) => q + 1)
            }
            className="p-4"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <Button
          onClick={handleAddToCart}
          className="w-full rounded-full py-4 text-lg"
        >
          Add to Cart
        </Button>

        <WhatsAppButton
          product={{ ...product, price }}
          quantity={quantity}
        />
      </div>

      <div className="mt-12 space-y-5 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
        <div className="flex items-start gap-4">
          <Truck className="mt-1 h-6 w-6 text-brand-green" />
          <div>
            <h4 className="font-semibold">
              Nationwide Delivery
            </h4>
            <p className="text-sm text-neutral-600">
              Secure delivery across Nigeria.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 h-6 w-6 text-brand-green" />
          <div>
            <h4 className="font-semibold">
              Quality Guaranteed
            </h4>
            <p className="text-sm text-neutral-600">
              Every item is inspected before shipping.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Leaf className="mt-1 h-6 w-6 text-brand-green" />
          <div>
            <h4 className="font-semibold">
              Sustainable Impact
            </h4>
            <p className="text-sm text-neutral-600">
              Produced using recovered materials.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="mb-5 text-xl font-bold">
          Why You'll Love It
        </h3>

        <div className="space-y-4">
          {[
            "Handcrafted in Abuja",
            "Premium recovered materials",
            "Every piece is unique",
            "Supports local artisans",
            "Designed for everyday use",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle className="h-5 w-5 text-brand-green" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}