"use client";

import { motion } from "framer-motion";

import { ProductSpecification } from "@/types/product";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  if (!specifications?.length) return null;

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Specifications"
          title="Product Details"
          description="Thoughtfully designed with durability, functionality and sustainability in mind."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
        >
          {specifications.map((item, index) => (
            <div
              key={item.id}
              className={`grid gap-4 px-8 py-6 md:grid-cols-[220px_1fr] ${
                index !== specifications.length - 1
                  ? "border-b border-neutral-100"
                  : ""
              }`}
            >
              <div className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                {item.specification}
              </div>

              <div className="text-brand-charcoal leading-7">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}