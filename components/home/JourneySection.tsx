"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Trash2,
  Recycle,
  Sparkles,
  Scissors,
  ShoppingBag,
  Leaf,
  ArrowRight,
} from "@/components/ui/Icon";

const journey = [
  {
    icon: Trash2,
    title: "Recovered Materials",
    description:
      "Textile offcuts, upholstery remnants, banners and other valuable materials are rescued before becoming waste.",
  },
  {
    icon: Recycle,
    title: "Sorting & Recovery",
    description:
      "Every material is carefully sorted, inspected and prepared for its next life through responsible recovery.",
  },
  {
    icon: Sparkles,
    title: "Cleaning & Design",
    description:
      "Recovered materials are cleaned, combined with thoughtful design, and prepared for premium production.",
  },
  {
    icon: Scissors,
    title: "Handcrafted",
    description:
      "Local artisans transform recovered materials into beautiful, durable products with exceptional craftsmanship.",
  },
  {
    icon: ShoppingBag,
    title: "AURA Collection",
    description:
      "Premium lifestyle products that combine sustainability, functionality and timeless design.",
  },
  {
    icon: Leaf,
    title: "Regenerative Impact",
    description:
      "Every purchase helps recover more materials, empowers artisans and supports greener communities.",
  },
];

export default function JourneySection() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          centered
          eyebrow="From Waste to Worth"
          title="The Journey Behind Every AURA Product"
          description="Authentic Recycling. Regenerative Approach. Every product begins with recovery and ends with lasting impact."
        />

        <div className="mt-20">

          <div className="grid gap-12 lg:grid-cols-6">

            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-white shadow-lg">
                    <Icon className="h-9 w-9" />
                  </div>

                  {index < journey.length - 1 && (
                    <div className="absolute left-[70%] top-10 hidden w-full lg:block">
                      <ArrowRight className="mx-auto h-6 w-6 text-brand-green/40" />
                    </div>
                  )}

                  <h3 className="mt-6 text-xl font-bold text-brand-charcoal">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
          className="mt-24 rounded-[36px] bg-brand-charcoal p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold">
            Waste isn&apos;t the end of the story.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            At AURA, we believe every recovered material deserves another
            opportunity to create beauty, value and impact. That&apos;s why every
            purchase contributes to a cleaner environment, supports local
            artisans, and advances the circular economy across Nigeria.
          </p>
        </motion.div>

      </Container>
    </section>
  );
}