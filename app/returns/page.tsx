import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
  CheckCircle,
  RefreshCcw, 
  ShieldCheck,
  Package,
  AlertCircle,
} from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Returns & Exchanges | AURA Store",
  description:
    "Learn about AURA Store's return, exchange and refund policy for handcrafted sustainable products.",
};

export default function ReturnsPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-green-50 to-white py-20">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
              Returns & Exchanges
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              We Want You To Love Your Purchase
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              Every AURA product is handcrafted from recovered
              materials. If something isn't right, we'll work with
              you to make it right.
            </p>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border p-8">

              <RefreshCcw className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-4 text-2xl font-bold">
                7-Day Return Window
              </h2>

              <p className="leading-8 text-slate-600">
                Eligible products may be returned within 7 days of
                delivery provided they remain unused and in their
                original condition.
              </p>

            </div>

            <div className="rounded-3xl border p-8">

              <ShieldCheck className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-4 text-2xl font-bold">
                Damaged Items
              </h2>

              <p className="leading-8 text-slate-600">
                If your order arrives damaged, contact us within
                48 hours with photographs so we can resolve the
                issue quickly.
              </p>

            </div>

            <div className="rounded-3xl border p-8">

              <Package className="mb-6 h-10 w-10 text-green-700" />

              <h2 className="mb-4 text-2xl font-bold">
                Exchanges
              </h2>

              <p className="leading-8 text-slate-600">
                Where stock is available, eligible items may be
                exchanged for another size, colour or design.
              </p>

            </div>

          </div>

        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>

          <div className="mx-auto max-w-5xl">

            <h2 className="mb-12 text-center text-4xl font-bold">
              Items Eligible For Return
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              {[
                "Unused products",
                "Products returned within 7 days",
                "Products with original packaging",
                "Wrong item delivered",
                "Manufacturing defects",
                "Damaged during delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border bg-white p-6"
                >
                  <CheckCircle className="h-6 w-6 text-green-700" />

                  <span className="font-medium">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </Container>
      </section>

      <section className="py-20">
        <Container>

          <div className="rounded-3xl border border-amber-300 bg-amber-50 p-10">

            <div className="flex items-start gap-5">

              <AlertCircle className="mt-1 h-8 w-8 text-amber-600" />

              <div>

                <h2 className="mb-4 text-2xl font-bold">
                  Non-Returnable Items
                </h2>

                <ul className="space-y-3 leading-8 text-slate-700">

                  <li>
                    • Custom or personalised products.
                  </li>

                  <li>
                    • Products showing signs of use.
                  </li>

                  <li>
                    • Products damaged by misuse.
                  </li>

                  <li>
                    • Clearance or promotional items unless
                    defective.
                  </li>

                  <li>
                    • Handmade products with natural material
                    variations are not considered defects.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </Container>
      </section>

      <section className="bg-green-700 py-20 text-white">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black">
              Need Help With A Return?
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-100">
              Contact our support team and we'll guide you through
              the return or exchange process.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="https://upwardeco.com.ng/contact"
                target="_blank"
              >
                <Button size="lg">
                  Contact Support
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