"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const partners = [
  {
    name: "UpwardEco",
    logo: "/logos/upwardeco.svg",
  },
  {
    name: "SendWaste",
    logo: "/logos/sendwaste.svg",
  },
  {
    name: "Sydani",
    logo: "/logos/sydani.svg",
  },
  {
    name: "RAN",
    logo: "/logos/ran.svg",
  },
  {
    name: "WAPAN",
    logo: "/logos/wapan.svg",
  },
  {
    name: "FME",
    logo: "/logos/fme.svg",
  },
  {
    name: "NESREA",
    logo: "/logos/nesrea.svg",
  },
  {
    name: "ISO 14001",
    logo: "/logos/iso14001.svg",
  },
];

export default function TrustedPartners() {
  return (
    <section className="bg-neutral-50 py-24">
      <Container>

        <SectionTitle
          centered
          eyebrow="Trusted By"
          title="Working Together For A Circular Future"
          description="Collaborating with institutions, partners and communities to accelerate sustainable impact across Nigeria."
        />

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {partners.map((partner, index) => (

            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .05,
              }}
              className="group flex h-40 items-center justify-center rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-16 w-full">

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                />

              </div>
            </motion.div>

          ))}

        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-neutral-500">
          Some certifications and registrations are currently in progress.
          Our commitment to environmental compliance and responsible production
          continues to guide every stage of AURA&apos;s growth.
        </p>

      </Container>
    </section>
  );
}