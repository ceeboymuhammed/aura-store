import Button from "@/components/ui/Button";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>

        <div className="overflow-hidden rounded-2rem bg-linear-to-r from-green-700 via-green-600 to-emerald-600 px-8 py-20 text-center shadow-2xl lg:px-20">

          <Badge className="border-white/20 bg-white/15 px-5 py-2 text-white">
            🌍 Join the Circular Economy
          </Badge>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-white lg:text-6xl">
            Every Purchase Gives
            <br />
            Waste a Second Life
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">
            Shop beautifully handcrafted products made from recovered
            materials and become part of a growing community creating a
            cleaner and more sustainable future.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

        <Link href="/shop">
  <Button
    size="lg"
    className="bg-white text-green-700 hover:bg-gray-100"
  >
    Shop Collection
  </Button>
</Link>

            <link href="/contact">
            <Button
              
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-green-700"
            >
              Contact Us
            </Button>
            </link>

          </div>

          <div className="mt-16 grid gap-8 border-t border-white/20 pt-12 md:grid-cols-3">

            <div>
              <h3 className="text-3xl font-bold text-white">
                ♻️
              </h3>

              <p className="mt-3 text-green-100">
                Recovered Materials
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                🧵
              </h3>

              <p className="mt-3 text-green-100">
                Handmade by Local Artisans
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                🌱
              </h3>

              <p className="mt-3 text-green-100">
                Positive Environmental Impact
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}