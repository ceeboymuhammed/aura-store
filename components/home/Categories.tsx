import Link from "next/link";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    name: "Bags",
    description:
      "Premium tote bags, handbags, purses and wallets handcrafted from recovered materials.",
    href: "/shop?category=bags",
    icon: "👜",
    gradient: "from-green-100 to-green-50",
  },
  {
    name: "Accessories",
    description:
      "Fashion accessories designed to combine sustainability with everyday style.",
    href: "/shop?category=accessories",
    icon: "✨",
    gradient: "from-amber-100 to-yellow-50",
  },
  {
    name: "Home Living",
    description:
      "Beautiful décor and lifestyle products that bring sustainability into your home.",
    href: "/shop?category=home-living",
    icon: "🏡",
    gradient: "from-blue-100 to-sky-50",
  },
];

export default function Categories() {
  return (
    <Container className="py-24">

    <SectionTitle
  eyebrow="Shop by Category"
  title="Shop by Category"
  description="Explore thoughtfully handcrafted collections designed from recovered materials."
  centered
/>

      <div className="grid gap-8 lg:grid-cols-3">

        {categories.map((category) => (
          <Link key={category.name} href={category.href}>

            <Card className="group h-full overflow-hidden p-0">

              <div
                className={`flex h-48 items-center justify-center bg-linear-to-br ${category.gradient}`}
              >
                <span className="text-7xl transition duration-300 group-hover:scale-110">
                  {category.icon}
                </span>
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {category.description}
                </p>

                <div className="mt-8 inline-flex items-center font-semibold text-green-700 transition group-hover:translate-x-1">
                  Explore Collection →
                </div>

              </div>

            </Card>

          </Link>
        ))}

      </div>

    </Container>
  );
}