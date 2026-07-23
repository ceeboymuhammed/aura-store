import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
  HelpCircle,
} from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AURA Store",
  description:
    "Find answers to common questions about AURA Store products, shipping, sustainability, returns and custom orders.",
};

const faqs = [
  {
    question: "What makes AURA products sustainable?",
    answer:
      "Our products are handcrafted using recovered and upcycled materials that would otherwise become waste. Every purchase helps reduce landfill waste while supporting local artisans.",
  },
  {
    question: "Are all products handmade?",
    answer:
      "Yes. Every AURA product is handcrafted in Nigeria. Small variations in colour, texture and finish are part of the uniqueness of handmade products.",
  },
  {
    question: "Do you deliver across Nigeria?",
    answer:
      "Yes. We currently deliver nationwide through trusted logistics partners. Delivery times depend on your location.",
  },
  {
    question: "Can I place a custom order?",
    answer:
      "Yes. We accept custom requests for selected products depending on material availability and production schedule.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Eligible products may be returned within seven days provided they remain unused and in their original condition. Please see our Returns & Exchanges policy for full details.",
  },
  {
    question: "How do I care for my product?",
    answer:
      "Avoid prolonged exposure to water, store in a dry place and clean gently with a soft cloth. Care instructions may vary depending on the product.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Not yet. We currently serve customers across Nigeria while preparing for international shipping in the future.",
  },
  {
    question: "Where are AURA products made?",
    answer:
      "All products are designed and handcrafted in Abuja, Nigeria using responsibly recovered materials.",
  },
];

export const dynamic = "force-static";

export default function FAQPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-green-50 to-white py-20">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
              Frequently Asked Questions
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              Everything You Need To Know
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              We've answered the questions we receive most often
              from customers shopping at AURA Store.
            </p>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="mx-auto max-w-4xl space-y-6">

            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <div className="flex items-start gap-5">

                  <HelpCircle className="mt-1 h-6 w-6 text-green-700" />

                  <div>

                    <h2 className="text-xl font-bold text-slate-900">
                      {faq.question}
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                      {faq.answer}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </Container>
      </section>

      <section className="bg-green-700 py-20 text-white">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black">
              Still Have Questions?
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-100">
              Our team is happy to help you choose the perfect
              sustainable product or answer any questions about
              your order.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="https://upwardeco.com.ng/contact"
                target="_blank"
              >
                <Button size="lg">
                  Contact Us
                </Button>
              </Link>

              <Link href="/shop">
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Continue Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

            </div>

          </div>

        </Container>
      </section>
    </>
  );
}