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
      title: "Product Not Found | AURA Store",
    };
  }

  return {
    title: `${product.seo_title ?? product.name} | AURA Store`,
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

  // 🎯 Direct Price Normalization matching Supabase products.price
  const normalizedProduct = {
    ...product,
    price: Number(product.price ?? 0),
  };

  const relatedProducts = await getRelatedProducts(
    product.id
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50/50 via-white to-white py-6 lg:py-12">
        <Container>
          <div className="mb-4">
            <Breadcrumb
              items={[
                {
                  label: "Store",
                  href: "/",
                },
                {
                  label:
                    product.category?.name ??
                    "Products",
                  href: product.category
                    ? `/?category=${product.category.slug}`
                    : "/",
                },
                {
                  label: product.name,
                },
              ]}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
            <ProductGallery
              images={product.images}
            />

            <div>
              {/* ProductInfo handles title, single category badge, price, and CTA */}
              <ProductInfo
                product={normalizedProduct as any}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Story */}
      {product.story && product.story.length > 0 && (
        <section className="bg-white py-12 lg:py-20 border-t border-slate-100">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
                Our Story
              </p>

              <h2 className="mt-2 text-2xl lg:text-4xl font-bold text-slate-900">
                From Waste to Wonder
              </h2>

              <p className="mt-3 text-sm lg:text-lg leading-relaxed text-slate-600">
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
      )}

      {/* Materials */}
      {product.materials && product.materials.length > 0 && (
        <section className="bg-slate-50 py-12 lg:py-20">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-slate-900">
                Materials
              </h2>

              <p className="mt-2 text-sm lg:text-lg text-slate-600">
                Carefully selected recovered materials give every
                product its own unique character.
              </p>
            </div>

            <ProductMaterials
              materials={product.materials}
            />
          </Container>
        </section>
      )}

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="bg-white py-12 lg:py-20">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-slate-900">
                Specifications
              </h2>
            </div>

            <ProductSpecifications
              specifications={product.specifications}
            />
          </Container>
        </section>
      )}

      {/* Impact */}
      {product.impacts && product.impacts.length > 0 && (
        <section className="bg-slate-50 py-12 lg:py-20">
          <Container>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
                Environmental Impact
              </p>

              <h2 className="mt-2 text-2xl lg:text-4xl font-bold text-slate-900">
                Every Purchase Makes A Difference
              </h2>
            </div>

            <ProductImpact
              impacts={product.impacts}
            />
          </Container>
        </section>
      )}

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-12 lg:py-20 border-t border-slate-100">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-slate-900">
                You May Also Like
              </h2>
            </div>

            <RelatedProducts
              products={relatedProducts}
            />
          </Container>
        </section>
      )}

      <StickyPurchaseBar product={normalizedProduct as any} />
    </>
  );
}