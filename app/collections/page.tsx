import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/Container";

import { getCategories } from "@/lib/queries/products";

export default async function CollectionsPage() {
  const categories = await getCategories();

  return (
    <section className="bg-white py-16 lg:py-24">

      <Container>

        <div className="mb-16 max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">
            Collections
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
            Shop by Collection
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse handcrafted products by category.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => {
  console.log(category.image);

  return (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative aspect-[4/3]">

                <Image
                  src={
  category.image
    ? category.image.startsWith("/")
      ? category.image
      : `/${category.image}`
    : "/collections/bags.jpg"
}
                  alt={category.name}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h2 className="text-2xl font-bold text-slate-900">
                  {category.name}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

              </div>

            </Link>

            );
})}
        </div>

      </Container>

    </section>
  );
}