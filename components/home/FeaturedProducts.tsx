"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Product } from "@/types/product";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/shop/ProductCard";

import { ArrowRight } from "@/components/ui/Icon";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({
  products,
}: FeaturedProductsProps) {
  if (!products?.length) return null;

  return (
    <section className="bg-white py-24">
      <Container>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <SectionTitle
            eyebrow="Featured Collection"
            title="Handcrafted. Sustainable. Beautiful."
            description="Discover products thoughtfully crafted from recovered materials. Every purchase supports a cleaner planet and local artisans."
          />

          <Link href="/shop">
            <Button
              variant="outline"
              className="gap-2"
            >
              View Collection

              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {products.slice(0, 4).map((product, index) => (

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
                duration: .45,
                delay: index * .08,
              }}
            >
              <ProductCard product={product} />
            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}