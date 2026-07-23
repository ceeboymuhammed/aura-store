import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms & Conditions | AURA Store",
  description:
    "Read the terms and conditions governing purchases and use of AURA Store.",
};

export default function TermsPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-green-50 to-white py-20">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
              Terms & Conditions
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              Terms of Use
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              These terms govern your use of the AURA Store website
              and the purchase of products from our platform.
            </p>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="prose prose-lg mx-auto max-w-4xl prose-slate">

            <h2>Acceptance of Terms</h2>

            <p>
              By accessing or purchasing from AURA Store, you agree
              to these Terms & Conditions.
            </p>

            <h2>Products</h2>

            <p>
              Every AURA product is handcrafted using recovered and
              upcycled materials. Variations in colour, texture and
              finish are natural characteristics of handmade
              products and should not be considered defects.
            </p>

            <h2>Pricing</h2>

            <p>
              Prices are displayed in Nigerian Naira (₦). Prices
              may change without prior notice.
            </p>

            <h2>Orders</h2>

            <p>
              Orders are subject to acceptance and product
              availability. We reserve the right to cancel orders
              in exceptional circumstances.
            </p>

            <h2>Shipping</h2>

            <p>
              Delivery timelines are estimates and may vary due to
              logistics providers, weather or other unforeseen
              circumstances.
            </p>

            <h2>Returns</h2>

            <p>
              Returns and exchanges are governed by our Returns &
              Exchanges Policy.
            </p>

            <h2>Intellectual Property</h2>

            <p>
              All designs, photographs, branding and website
              content remain the property of UpwardEco Ltd unless
              otherwise stated.
            </p>

            <h2>Limitation of Liability</h2>

            <p>
              AURA Store shall not be liable for indirect,
              incidental or consequential damages arising from the
              use of our products or website.
            </p>

            <h2>Changes</h2>

            <p>
              We may update these Terms & Conditions from time to
              time. Continued use of the website constitutes
              acceptance of the revised terms.
            </p>

          </div>

        </Container>
      </section>

      <section className="bg-green-700 py-20 text-center text-white">
        <Container>

          <h2 className="text-4xl font-black">
            Questions About These Terms?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            We're happy to clarify any aspect of these terms before
            you place an order.
          </p>

          <div className="mt-10">

            <Link
              href="https://upwardeco.com.ng/contact"
              target="_blank"
            >
              <Button size="lg">
                Contact Us
              </Button>
            </Link>

          </div>

        </Container>
      </section>
    </>
  );
}