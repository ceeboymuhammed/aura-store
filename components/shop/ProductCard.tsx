"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Product } from "@/types/product";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
  Leaf,
  Heart,
} from "@/components/ui/Icon";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const primary =
    product.images.find((img) => img.is_primary) ??
    product.images[0];

  const secondary =
    product.images.find(
      (img) => !img.is_primary
    ) ?? primary;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-2xl"
    >
      <Link href={`/shop/${product.slug}`}>

        <div className="relative aspect-square overflow-hidden bg-slate-100">

          <Image
            src={
              primary?.image_url ??
              "/product-placeholder.jpg"
            }
            alt={
              primary?.alt_text ??
              product.name
            }
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className={`object-cover transition-all duration-700 ${
              secondary
                ? "group-hover:opacity-0"
                : "group-hover:scale-105"
            }`}
          />

          {secondary && secondary !== primary && (
            <Image
              src={secondary.image_url}
              alt={secondary.alt_text}
              fill
              sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
              className="object-cover opacity-0 transition-all duration-700 group-hover:opacity-100"
            />
          )}

          <div className="absolute left-5 top-5">

            {product.featured && (
              <Badge variant="success">
                Featured
              </Badge>
            )}

          </div>

          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow transition hover:scale-110"
          >
            <Heart className="h-5 w-5" />
          </button>

        </div>

      </Link>

      <div className="space-y-5 p-7">

        {product.category && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
            {product.category.name}
          </p>
        )}

        <Link href={`/shop/${product.slug}`}>

          <h3 className="text-2xl font-bold leading-tight text-slate-900 transition group-hover:text-green-700">
            {product.name}
          </h3>

        </Link>

        <p className="line-clamp-2 text-[15px] leading-7 text-slate-600">
          {product.short_description}
        </p>

        <div className="flex items-center gap-2 text-green-700">

          <Leaf className="h-4 w-4" />

          <span className="text-sm font-medium">
            Recovered Materials
          </span>

        </div>

        <div className="flex items-end justify-between pt-2">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Price
            </p>

            <h4 className="mt-2 text-3xl font-black text-slate-900">
              ₦{product.price.toLocaleString()}
            </h4>

          </div>

          <Link href={`/shop/${product.slug}`}>

            <Button
              size="sm"
              className="rounded-full px-6"
            >
              View
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </Link>

        </div>

      </div>

    </motion.article>
  );
}