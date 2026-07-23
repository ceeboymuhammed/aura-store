"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const collections = [
  {
    title: "Carry with Purpose",
    category: "Bags",
    description:
      "Premium backpacks, tote bags, handbags and laptop bags handcrafted from recovered materials.",
    image: "/collections/bags.jpg",
    href: "/shop?category=bags",
  },
  {
    title: "Wear the Change",
    category: "Accessories",
    description:
      "Beautiful everyday accessories that prove sustainability can be elegant.",
    image: "/collections/accessories.jpg",
    href: "/shop?category=accessories",
  },
  {
    title: "Live Sustainably",
    category: "Home & Living",
    description:
      "Thoughtfully crafted home essentials designed for conscious living.",
    image: "/collections/home-living.jpg",
    href: "/shop?category=home-living",
  },
];

export default function CollectionsShowcase() {
  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        <SectionTitle
          centered
          eyebrow="Collections"
          title="Designed Around Everyday Living"
          description="Explore handcrafted collections that combine timeless design with authentic sustainability."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <Link href={collection.href}>
                <article className="group overflow-hidden rounded-32px bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                       sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                        {collection.category}
                      </p>

                      <h3 className="mt-2 text-3xl font-bold">
                        {collection.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="leading-7 text-neutral-600">
                      {collection.description}
                    </p>

                    <div className="mt-8">
                      <Button variant="outline">
                        Explore Collection
                      </Button>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}