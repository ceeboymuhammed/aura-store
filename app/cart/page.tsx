import type { Metadata } from "next";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
  ShoppingBag,
  Leaf,
  Truck,
  ShieldCheck,
} from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Shopping Cart | AURA Store",
  description:
    "Review your shopping cart before completing your order.",
};

export default function CartPage() {
  const cartItems: any[] = [];

  if (cartItems.length === 0) {
    return (
      <>
        <section className="bg-gradient-to-b from-slate-50 to-white py-24">
          <Container>

            <div className="mx-auto max-w-3xl text-center">

              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-green-100">

                <ShoppingBag className="h-16 w-16 text-green-700" />

              </div>

              <h1 className="mt-10 text-5xl font-black tracking-tight text-slate-900">
                Your Cart is Empty
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                Looks like you haven't added anything yet.
                Explore our handcrafted sustainable products made
                from recovered materials and discover something
                you'll love.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">

                <Link href="/shop">
                  <Button size="lg">
                    Continue Shopping
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/collections">
                  <Button
                    variant="secondary"
                    size="lg"
                  >
                    Browse Collections
                  </Button>
                </Link>

              </div>

            </div>

          </Container>
        </section>

        <section className="py-20">
          <Container>

            <div className="grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl border bg-white p-8 text-center">

                <Leaf className="mx-auto mb-6 h-10 w-10 text-green-700" />

                <h2 className="mb-4 text-xl font-bold">
                  Sustainable Materials
                </h2>

                <p className="leading-7 text-slate-600">
                  Every product is handcrafted using recovered
                  materials that help reduce landfill waste.
                </p>

              </div>

              <div className="rounded-3xl border bg-white p-8 text-center">

                <Truck className="mx-auto mb-6 h-10 w-10 text-green-700" />

                <h2 className="mb-4 text-xl font-bold">
                  Nationwide Delivery
                </h2>

                <p className="leading-7 text-slate-600">
                  Secure delivery across Nigeria with reliable
                  logistics partners.
                </p>

              </div>

              <div className="rounded-3xl border bg-white p-8 text-center">

                <ShieldCheck className="mx-auto mb-6 h-10 w-10 text-green-700" />

                <h2 className="mb-4 text-xl font-bold">
                  Quality Guaranteed
                </h2>

                <p className="leading-7 text-slate-600">
                  Every handcrafted product is carefully inspected
                  before it reaches your doorstep.
                </p>

              </div>

            </div>

          </Container>
        </section>

        <section className="bg-slate-50 py-20">
          <Container>

            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-12 text-center shadow-sm">

              <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
                Every Purchase Matters
              </p>

              <h2 className="text-4xl font-black text-slate-900">
                Shop With Purpose
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                Every purchase supports local artisans, encourages
                responsible production and contributes to a cleaner,
                more circular future.
              </p>

              <div className="mt-12">

                <Link
                  href="https://upwardeco.com.ng"
                  target="_blank"
                >
                  <Button variant="secondary">
                    Learn About UpwardEco
                  </Button>
                </Link>

              </div>

            </div>

          </Container>
        </section>
      </>
    );
  }

  return (
    <section className="py-20">
      <Container>

        <h1 className="mb-12 text-4xl font-black">
          Shopping Cart
        </h1>

        {/* Cart items will be connected to CartContext */}

      </Container>
    </section>
  );
}