"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Product } from "@/types/product";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/shop/ProductCard";

import { ArrowRight } from "@/components/ui/Icon";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (!products?.length) {
    return null;
  }

  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="You May Also Like"
            title="Continue Your Sustainable Journey"
            description="Discover more handcrafted products made from recovered materials."
          />

          <Link href="/shop">
            <Button
              variant="secondary"
              className="gap-2 rounded-full"
            >
              View All Products

              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
             <div className="rounded-xl border p-6">
  {product.name}
</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-20 overflow-hidden rounded-32px bg-brand-green px-10 py-14 text-center text-white"
        >
          <h2 className="text-3xl font-bold">
            Every Purchase Makes an Impact
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
            Every AURA product diverts valuable materials from landfill,
            supports local artisans, and helps build a circular economy where
            waste becomes opportunity.
          </p>

          <Link href="/shop">
            <Button
              variant="secondary"
              className="mt-10 rounded-full bg-white text-brand-green hover:bg-neutral-100"
            >
              Explore the Collection
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}