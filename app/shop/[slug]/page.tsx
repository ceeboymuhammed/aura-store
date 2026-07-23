import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductGallery from "@/components/product/ProductGallery";
import ProductImpact from "@/components/product/ProductImpact";
import ProductInfo from "@/components/product/ProductInfo";
import ProductMaterials from "@/components/product/ProductMaterials";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductStory from "@/components/product/ProductStory";
import RelatedProducts from "@/components/product/RelatedProducts";
import StickyPurchaseBar from "@/components/product/StickyPurchaseBar";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/queries/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seo_title ?? product.name,
    description:
      product.seo_description ??
      product.short_description,
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(
    product.id
  );

  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-b from-green-50 via-white to-white py-16 lg:py-24">

        <Container>
<Breadcrumb
  items={[
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label:
        product.category?.name ??
        "Products",
      href: product.category
        ? `/shop?category=${product.category.slug}`
        : "/shop",
    },
    {
      label: product.name,
    },
  ]}
/>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

            <ProductGallery
              images={product.images}
            />

            <div>

              {product.category && (
                <Badge variant="secondary">
                  {product.category.name}
                </Badge>
              )}

              <div className="mt-6">
                <ProductInfo
                  product={product}
                />
              </div>

            </div>

          </div>

        </Container>

      </section>

      {/* Story */}

      <section className="bg-white py-20">

        <Container>

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              From Waste to Wonder
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every AURA product begins with recovered materials,
              thoughtfully redesigned into premium lifestyle essentials
              that reduce waste while supporting local craftsmanship.
            </p>

          </div>

          <ProductStory
            story={product.story}
          />

        </Container>

      </section>

      {/* Materials */}

      <section className="bg-slate-50 py-20">

        <Container>

          <div className="mb-12">

            <h2 className="text-4xl font-bold text-slate-900">
              Materials
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Carefully selected recovered materials give every
              product its own unique character.
            </p>

          </div>

          <ProductMaterials
            materials={product.materials}
          />

        </Container>

      </section>

      {/* Specifications */}

      <section className="bg-white py-20">

        <Container>

          <div className="mb-12">

            <h2 className="text-4xl font-bold text-slate-900">
              Specifications
            </h2>

          </div>

          <ProductSpecifications
            specifications={product.specifications}
          />

        </Container>

      </section>

      {/* Impact */}

      <section className="bg-slate-50 py-20">

        <Container>

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">
              Environmental Impact
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Every Purchase Makes A Difference
            </h2>

          </div>

          <ProductImpact
            impacts={product.impacts}
          />

        </Container>

      </section>

      {/* Related */}

      <section className="bg-white py-20">

        <Container>

          <div className="mb-12">

            <h2 className="text-4xl font-bold text-slate-900">
              You May Also Like
            </h2>

          </div>

          <RelatedProducts
            products={relatedProducts}
          />

        </Container>

      </section>
      <StickyPurchaseBar product={product} />
    </>
  );
}