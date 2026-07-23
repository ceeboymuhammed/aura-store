"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Leaf,
  Recycle,
  Users,
  Sparkles,
} from "@/components/ui/Icon";

const pillars = [
  {
    icon: Recycle,
    title: "Authentic Recycling",
    description:
      "We recover valuable materials that would otherwise become waste and transform them into premium lifestyle products.",
  },
  {
    icon: Sparkles,
    title: "Regenerative Approach",
    description:
      "Every AURA product is designed to regenerate value for communities, artisans and the environment.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Our goal is to create over 50 premium products while empowering 20+ local artisans with meaningful income opportunities.",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description:
      "Over 100 tons of materials have already been recovered through UpwardEco, proving that waste can become opportunity.",
  },
];

export default function WhyAura() {
  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        <SectionTitle
          centered
          eyebrow="Why AURA?"
          title="Authentic Recycling. Regenerative Approach."
          description="AURA is the premium lifestyle brand of UpwardEco, proving that exceptional design and environmental responsibility belong together."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10">
                  <Icon className="h-8 w-8 text-brand-green" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-brand-charcoal">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 rounded-[36px] bg-brand-green px-10 py-14 text-center text-white"
        >
          <h2 className="text-4xl font-bold">
            Beautiful Products.
            <br />
            Regenerative Impact.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Every AURA purchase helps recover more materials, supports local
            artisans, advances circular design, and contributes 10–20% of
            revenue towards creating greener communities across Nigeria.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}