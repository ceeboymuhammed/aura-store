"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Product } from "@/types/product";

import Badge from "@/components/ui/Badge";

import {
  ArrowRight,
  Heart,
} from "@/components/ui/Icon";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const primary =
    product.images?.find((img) => img.is_primary) ??
    product.images?.[0];

  const secondary =
    product.images?.find(
      (img) => !img.is_primary
    ) ?? primary;

  // 🎯 Direct Database Price (Reflects Supabase products.price)
  const price = Number(product.price ?? 0);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:shadow-md flex flex-col justify-between"
    >
      <div>
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
              sizes="(max-width:768px) 33vw, 25vw"
              className={`object-cover transition-all duration-500 ${
                secondary && secondary !== primary
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-105"
              }`}
            />

            {secondary && secondary !== primary && (
              <Image
                src={secondary.image_url}
                alt={secondary.alt_text ?? product.name}
                fill
                sizes="(max-width:768px) 33vw, 25vw"
                className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
              />
            )}

            {/* Badges */}
            <div className="absolute left-1.5 top-1.5 sm:left-3 sm:top-3">
              {product.featured && (
                <Badge variant="success" className="text-[8px] sm:text-xs px-1.5 py-0.5">
                  Featured
                </Badge>
              )}
            </div>

            <button
              aria-label="Save item"
              className="absolute right-1.5 top-1.5 sm:right-3 sm:top-3 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-xs shadow-xs transition hover:scale-110"
            >
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-slate-600" />
            </button>
          </div>
        </Link>

        {/* Content Details */}
        <div className="p-2 sm:p-4 space-y-1 sm:space-y-2">
          {product.category && (
            <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-green-700 line-clamp-1">
              {product.category.name}
            </p>
          )}

          <Link href={`/shop/${product.slug}`}>
            <h3 className="text-xs sm:text-base font-semibold leading-tight text-slate-900 transition group-hover:text-green-700 line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="p-2 sm:p-4 pt-0">
        <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-100">
          <div>
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-xs sm:text-base font-medium text-slate-900">
                ₦{price.toLocaleString()}
              </span>
            </div>
          </div>

          <Link href={`/shop/${product.slug}`}>
            <span className="inline-flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-slate-900 text-white hover:bg-green-700 transition-colors">
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}