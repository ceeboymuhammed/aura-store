import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyAura from "@/components/home/WhyAura";
import ImpactDashboard from "@/components/home/ImpactDashboard";
import CollectionsShowcase from "@/components/home/CollectionsShowcase";
import JourneySection from "@/components/home/JourneySection";
import TrustedPartners from "@/components/home/TrustedPartners";

import { getFeaturedProducts } from "@/lib/queries/products";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

 return (
  <>
    <Hero />
    <FeaturedProducts products={featuredProducts} />
    <WhyAura />
    <ImpactDashboard />
    <CollectionsShowcase />
    <JourneySection />
    <TrustedPartners />
    
  </>
);
}