"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-neutral-50 to-green-50">
      <Container>
        <div className="grid min-h-[88vh] items-center gap-16 py-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <span className="inline-flex items-center rounded-full bg-brand-green/10 px-5 py-2 text-sm font-semibold text-brand-green">
              Authentic Recycling • Regenerative Approach
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-brand-charcoal lg:text-7xl">
              Premium Products
              <br />
              Regenerated
              <br />
              from Waste.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              AURA transforms recovered materials into premium handcrafted
              lifestyle products that celebrate sustainability, craftsmanship,
              and circular design. Beautiful products with measurable impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/shop">
                <Button size="lg">
                  Shop Collection
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Our Story
                </Button>
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">

              <div>
                <h3 className="text-3xl font-bold text-brand-green">
                  17+
                </h3>

                <p className="mt-2 text-sm text-neutral-600">
                  Upcycled Products
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-brand-green">
                  370kg+
                </h3>

                <p className="mt-2 text-sm text-neutral-600">
                  Materials Recovered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-brand-green">
                  100%
                </h3>

                <p className="mt-2 text-sm text-neutral-600">
                  Handmade
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-brand-green">
                  10–20%
                </h3>

                <p className="mt-2 text-sm text-neutral-600">
                  Supports Green Spaces
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/hero.jpg"
                alt="AURA handcrafted products"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}