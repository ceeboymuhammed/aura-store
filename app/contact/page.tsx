import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import {
  Mail,
  Phone,
  Globe,
  MessageCircle,
  ArrowRight,
} from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact | AURA Store",
  description:
    "Get in touch with AURA Store and the UpwardEco team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-green-50 to-white py-20">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
              Contact Us
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              We'd Love To Hear From You
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              Whether you're placing an order, requesting a custom
              product or looking to partner with us, our team is
              ready to help.
            </p>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border bg-white p-10">

              <Mail className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-3 text-2xl font-bold">
                Email
              </h2>

              <p className="mb-6 leading-8 text-slate-600">
                Reach our support team for product enquiries,
                partnerships and wholesale requests.
              </p>

              <a
                href="mailto:hello@upwardeco.com.ng"
                className="font-semibold text-green-700 hover:underline"
              >
                hello@upwardeco.com.ng
              </a>

            </div>

            <div className="rounded-3xl border bg-white p-10">

              <MessageCircle className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-3 text-2xl font-bold">
                WhatsApp
              </h2>

              <p className="mb-6 leading-8 text-slate-600">
                Need a quick response? Chat directly with our team.
              </p>

              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                className="font-semibold text-green-700 hover:underline"
              >
                Chat on WhatsApp
              </a>

            </div>

            <div className="rounded-3xl border bg-white p-10">

              <Phone className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-3 text-2xl font-bold">
                Customer Support
              </h2>

              <p className="leading-8 text-slate-600">
                Monday – Friday
                <br />
                9:00 AM – 5:00 PM (WAT)
              </p>

            </div>

            <div className="rounded-3xl border bg-white p-10">

              <Globe className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-3 text-2xl font-bold">
                Visit UpwardEco
              </h2>

              <p className="mb-6 leading-8 text-slate-600">
                Learn more about our environmental initiatives,
                waste recovery solutions and sustainability
                programmes.
              </p>

              <Link
                href="https://upwardeco.com.ng"
                target="_blank"
                className="font-semibold text-green-700 hover:underline"
              >
                www.upwardeco.com.ng
              </Link>

            </div>

          </div>

        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>

          <div className="mx-auto max-w-5xl">

            <h2 className="mb-12 text-center text-4xl font-black">
              Explore The UpwardEco Ecosystem
            </h2>

            <div className="grid gap-8 md:grid-cols-3">

              <Link
                href="https://upwardeco.com.ng"
                target="_blank"
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">
                  UpwardEco
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Sustainability, environmental programmes and
                  circular economy initiatives.
                </p>

              </Link>

              <Link
                href="https://wastewise-ai.vercel.app"
                target="_blank"
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">
                  WasteWise AI
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  AI-powered waste sorting and sustainability
                  education.
                </p>

              </Link>

              <Link
                href="https://sendwaste.com"
                target="_blank"
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">
                  SendWaste
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  ESG reporting, waste tracking and recovery
                  management platform.
                </p>

              </Link>

            </div>

          </div>

        </Container>
      </section>

      <section className="bg-green-700 py-20 text-center text-white">
        <Container>

          <h2 className="text-4xl font-black">
            Ready To Shop Sustainably?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            Explore handcrafted products made from recovered
            materials and support a circular future.
          </p>

          <div className="mt-10">

            <Link href="/shop">
              <Button size="lg">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

          </div>

        </Container>
      </section>
    </>
  );
}