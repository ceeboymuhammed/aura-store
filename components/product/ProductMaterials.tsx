"use client";

import { motion } from "framer-motion";

import { ProductMaterial } from "@/types/product";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Recycle,
  Leaf,
  Sparkles,
  CheckCircle,
} from "@/components/ui/Icon";

interface ProductMaterialsProps {
  materials: ProductMaterial[];
}

export default function ProductMaterials({
  materials,
}: ProductMaterialsProps) {
  if (!materials?.length) return null;

  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Material Composition"
          title="Recovered Materials. Premium Craftsmanship."
          description="Every AURA product begins with carefully recovered materials that are cleaned, sorted and transformed into beautiful everyday essentials."
          centered
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">

          {/* Materials */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .5,
            }}
            className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <div className="space-y-6">

              {materials.map((material) => (

                <div
                  key={material.id}
                  className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">

                        <Recycle className="h-5 w-5" />

                      </div>

                      <div>

                        <h3 className="font-semibold text-brand-charcoal">
                          {material.material}
                        </h3>

                        <p className="text-sm text-neutral-500">
                          Recovered Material
                        </p>

                      </div>

                    </div>

                    {material.percentage && (
                      <div className="text-right">

                        <div className="text-2xl font-bold text-brand-green">
                          {material.percentage}%
                        </div>

                        <div className="text-xs uppercase tracking-wide text-neutral-500">
                          Composition
                        </div>

                      </div>
                    )}

                  </div>

                  {material.percentage && (
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-200">

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${material.percentage}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: .8,
                        }}
                        className="h-full rounded-full bg-brand-green"
                      />

                    </div>
                  )}

                </div>

              ))}

            </div>

          </motion.div>

          {/* Sustainability */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .5,
            }}
            className="rounded-3xl bg-brand-charcoal p-8 text-white"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-white">

              <Leaf className="h-8 w-8" />

            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Circular by Design
            </h3>

            <p className="mt-5 leading-8 text-neutral-300">
              Instead of producing new materials, AURA gives existing
              resources another life. Every product diverts valuable
              materials from landfill while reducing demand for virgin
              resources.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Recovered locally",
                "Handcrafted in Abuja",
                "Reduced environmental footprint",
                "Supports local artisans",
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

            <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">

              <div className="flex items-center gap-3">

                <Sparkles className="h-6 w-6 text-brand-green" />

                <div>

                  <p className="font-semibold">
                    Every Product is Unique
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    Due to the nature of recovered materials,
                    colours, textures and patterns may vary slightly,
                    making every AURA product one of a kind.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}