import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
  CheckCircle,
  Truck,
  MapPin,
  Package,
  Clock,
} from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Shipping & Delivery | AURA Store",
  description:
    "Learn about AURA Store's shipping, delivery timelines, order processing and nationwide delivery across Nigeria.",
};

export default function ShippingPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-green-50 to-white py-20">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
              Shipping & Delivery
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              Delivering Sustainable Products Across Nigeria
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              Every AURA Store purchase is carefully prepared,
              quality checked and securely packaged before it
              leaves our workshop.
            </p>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-8">

              <Truck className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-4 text-2xl font-bold">
                Nationwide Delivery
              </h2>

              <p className="leading-8 text-slate-600">
                We currently deliver to customers across Nigeria
                through trusted logistics partners. Delivery
                timelines depend on your location.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">

              <Clock className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-4 text-2xl font-bold">
                Processing Time
              </h2>

              <p className="leading-8 text-slate-600">
                Orders are processed within 1–3 business days.
                Handmade or custom products may require additional
                production time before dispatch.
              </p>

            </div>

          </div>

        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>

          <div className="mx-auto max-w-5xl">

            <h2 className="mb-12 text-center text-4xl font-bold">
              Estimated Delivery Times
            </h2>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">

              <div className="grid grid-cols-2 border-b bg-slate-100 px-8 py-5 font-semibold">

                <span>Destination</span>

                <span>Estimated Time</span>

              </div>

              {[
                ["Abuja", "1–2 Business Days"],
                ["North Central", "2–4 Business Days"],
                ["Lagos & South West", "3–5 Business Days"],
                ["South South", "3–6 Business Days"],
                ["South East", "3–6 Business Days"],
                ["North East & North West", "4–7 Business Days"],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-2 border-b last:border-0 px-8 py-5"
                >
                  <span>{row[0]}</span>

                  <span>{row[1]}</span>

                </div>
              ))}

            </div>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border p-8">

              <Package className="mb-5 h-10 w-10 text-green-700" />

              <h3 className="mb-4 text-xl font-bold">
                Secure Packaging
              </h3>

              <p className="leading-8 text-slate-600">
                Every item is carefully inspected and securely
                packaged before shipment.
              </p>

            </div>

            <div className="rounded-3xl border p-8">

              <MapPin className="mb-5 h-10 w-10 text-green-700" />

              <h3 className="mb-4 text-xl font-bold">
                Tracking
              </h3>

              <p className="leading-8 text-slate-600">
                Tracking details are shared once your order has
                been dispatched whenever available.
              </p>

            </div>

            <div className="rounded-3xl border p-8">

              <CheckCircle className="mb-5 h-10 w-10 text-green-700" />

              <h3 className="mb-4 text-xl font-bold">
                Quality Checked
              </h3>

              <p className="leading-8 text-slate-600">
                Products go through a final inspection to ensure
                they meet our quality standards before shipping.
              </p>

            </div>

          </div>

        </Container>
      </section>

      <section className="bg-green-700 py-20 text-white">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black">
              Questions About Delivery?
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-100">
              If you have questions about delivery timelines,
              shipping costs or special orders, our team is happy
              to help.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link href="/shop">
                <Button size="lg">
                  Continue Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link
                href="https://upwardeco.com.ng/contact"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="secondary"
                >
                  Contact Us
                </Button>
              </Link>

            </div>

          </div>

        </Container>
      </section>
    </>
  );
}