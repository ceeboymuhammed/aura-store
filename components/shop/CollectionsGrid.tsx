import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "Bags",
    description:
      "Elegant bags handcrafted from recovered fabrics and reclaimed materials.",
    href: "/shop?category=bags",
    image: "/collections/bags.jpg",
  },
  {
    title: "Accessories",
    description:
      "Small everyday essentials designed with sustainability in mind.",
    href: "/shop?category=accessories",
    image: "/collections/accessories.jpg",
  },
  {
    title: "Home Living",
    description:
      "Beautiful pieces that bring circular design into your home.",
    href: "/shop?category=home-living",
    image: "/collections/home-living.jpg",
  },
];

export default function CollectionsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {collections.map((collection) => (
        <Link
          key={collection.title}
          href={collection.href}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="space-y-3 p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {collection.title}
            </h3>

            <p className="leading-7 text-slate-600">
              {collection.description}
            </p>

            <div className="pt-2 text-sm font-semibold text-green-700">
              Shop Collection →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}