"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Recycle,
  Leaf,
  Users,
  Sparkles,
} from "@/components/ui/Icon";

const stats = [
  {
    icon: Recycle,
    value: "100+",
    suffix: "Tons",
    title: "Materials Recovered",
    description:
      "Recovered from households, institutions and businesses over the last three years.",
    color: "bg-green-50 text-brand-green",
  },
  {
    icon: Sparkles,
    value: "50+",
    suffix: "",
    title: "Product Designs",
    description:
      "Our growing collection of premium upcycled lifestyle products.",
    color: "bg-orange-50 text-brand-coral",
  },
  {
    icon: Users,
    value: "20+",
    suffix: "",
    title: "Local Artisans",
    description:
      "Creating dignified jobs through circular craftsmanship across Abuja.",
    color: "bg-blue-50 text-sky-600",
  },
  {
    icon: Leaf,
    value: "10–20%",
    suffix: "",
    title: "Green Spaces",
    description:
      "Of every sale is committed to restoring greener communities.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function ImpactDashboard() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          centered
          eyebrow="Our Impact"
          title="Creating Value Beyond Products"
          description="Every AURA product carries measurable environmental and social impact."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;
            <Icon className="h-8 w-8" />

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: .45,
                }}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-5xl font-black text-brand-charcoal">
                  {stat.value}

                  <span className="ml-1 text-2xl">
                    {stat.suffix}
                  </span>
                </h3>

                <p className="mt-3 text-lg font-semibold text-brand-charcoal">
                  {stat.title}
                </p>

                <p className="mt-4 leading-7 text-neutral-600">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}