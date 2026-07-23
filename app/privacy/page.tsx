import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy | AURA Store",
  description:
    "Learn how AURA Store collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-green-50 to-white py-20">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
              Privacy Policy
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              Your Privacy Matters
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              We believe transparency is part of sustainability.
              This policy explains how we collect, use and protect
              your information.
            </p>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="prose prose-lg mx-auto max-w-4xl prose-slate">

            <h2>Information We Collect</h2>

            <p>
              We may collect information such as your name, email
              address, phone number, delivery address and payment
              information when you place an order or contact us.
            </p>

            <h2>How We Use Your Information</h2>

            <ul>
              <li>Process and fulfil your orders.</li>
              <li>Provide customer support.</li>
              <li>Communicate updates about your purchase.</li>
              <li>Improve our products and services.</li>
              <li>Meet legal and regulatory obligations.</li>
            </ul>

            <h2>Payment Information</h2>

            <p>
              Payments are processed through trusted payment
              providers. AURA Store does not store your payment
              card information.
            </p>

            <h2>Cookies</h2>

            <p>
              Our website may use cookies to improve your browsing
              experience, remember preferences and understand how
              visitors use our website.
            </p>

            <h2>Data Security</h2>

            <p>
              We take reasonable technical and organisational
              measures to protect your personal information from
              unauthorised access, disclosure or misuse.
            </p>

            <h2>Third-Party Services</h2>

            <p>
              We may work with trusted logistics providers,
              analytics platforms and payment processors to
              deliver our services. These providers only receive
              the information necessary to perform their services.
            </p>

            <h2>Your Rights</h2>

            <p>
              You may request access to, correction or deletion of
              your personal information by contacting us.
            </p>

            <h2>Policy Updates</h2>

            <p>
              This Privacy Policy may be updated periodically to
              reflect changes to our services or legal
              requirements.
            </p>

          </div>

        </Container>
      </section>

      <section className="bg-green-700 py-20 text-center text-white">
        <Container>

          <h2 className="text-4xl font-black">
            Questions About Your Privacy?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            If you have questions about how we use your
            information, we're happy to help.
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