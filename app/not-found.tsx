import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center bg-white">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-green-700">
            Error 404
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight text-slate-900">
            This page doesn't exist.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            The page you're looking for may have been moved,
            deleted, or the link may be incorrect.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link href="/shop">
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>

            <Link
              href="https://upwardeco.com.ng"
              target="_blank"
            >
              <Button
                variant="secondary"
                size="lg"
              >
                Visit UpwardEco
              </Button>
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}