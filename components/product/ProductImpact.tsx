"use client";

import { motion } from "framer-motion";

import { ProductImpact as ProductImpactType } from "@/types/product";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Leaf,
  Recycle,
  Trees,
  Droplets,
  Globe,
  ShieldCheck,
  Users,
  Sparkles,
} from "@/components/ui/Icon";

interface ProductImpactProps {
  impacts: ProductImpactType[];
}

const iconMap = {
  recycle: Recycle,
  leaf: Leaf,
  trees: Trees,
  droplets: Droplets,
  globe: Globe,
  shield: ShieldCheck,
  users: Users,
};

export default function ProductImpact({
  impacts,
}: ProductImpactProps) {
  if (!impacts?.length) return null;

  return (
    <section className="bg-linear-to-b from-brand-green/5 to-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Positive Impact"
          title="Every Purchase Creates Change"
          description="Every AURA product contributes to cleaner communities, supports local artisans and helps transform waste into valuable everyday products."
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {impacts.map((impact, index) => {
            const Icon =
              iconMap[
                impact.icon?.toLowerCase() as keyof typeof iconMap
              ] ?? Sparkles;

            return (
              <motion.div
                key={impact.id}
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
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand-green/30 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-green/5 blur-3xl transition group-hover:bg-brand-green/10" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green transition group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-brand-charcoal">
                    {impact.title}
                  </h3>

                  <p className="mt-3 text-4xl font-bold text-brand-green">
                    {impact.value}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-neutral-600">
                    This product contributes directly to AURA&apos;s circular
                    economy mission by extending the life of recovered
                    materials while supporting environmental sustainability
                    and local livelihoods.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <motion.div
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
            delay: 0.4,
          }}
          className="mt-16 overflow-hidden rounded-32px bg-brand-charcoal px-10 py-12 text-white"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                Beyond Products
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Your purchase powers a circular future.
              </h3>

              <p className="mt-5 leading-8 text-neutral-300">
                Every item sold helps recover more materials, reduce landfill
                waste, create green jobs and strengthen local communities
                through sustainable production.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center lg:min-w-340px">
              <div>
                <p className="text-5xl font-bold text-brand-green">
                  95%
                </p>
                <p className="mt-2 text-sm text-neutral-300">
                  Waste Recovery Goal
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold text-brand-green">
                  100%
                </p>
                <p className="mt-2 text-sm text-neutral-300">
                  Handcrafted
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}