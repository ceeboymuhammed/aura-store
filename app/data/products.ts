// data/products.ts

export interface Product {
  id: number;
  title: string;
  basePrice: number;
  discountPrice?: number; // Optional: Only if it's on sale
  impact: string;
  image: string;
  description: string;
  specs: string[];
  variants: string[];
  isHotSelling: boolean;
}

export const allProducts: Product[] = [
  {
    id: 1,
    title: "The Aura Neo-Geo Band",
    basePrice: 8500,
    impact: "♻️ 0.2kg HDPE Plastic Saved",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=80",
    description: "Crafted entirely by hand in our Abuja facility, this striking geometric band gives high-fashion utility to discarded HDPE bottle caps.",
    specs: ["Material: 100% Recycled Polyethylene", "Weight: 8g"],
    variants: ["Teal", "Marbled Coral"],
    isHotSelling: true
  },
  {
    id: 2,
    title: "Regen Eco-Tote Bag",
    basePrice: 22000,
    impact: "♻️ 1.1kg Fabric Waste Diverted",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&q=80",
    description: "A highly durable, minimalist tote repurposed completely from premium fabric waste cutoffs.",
    specs: ["Material: Upcycled Heavy-Duty Cotton"],
    variants: ["Natural White", "Olive Green"],
    isHotSelling: true
  },
  {
    id: 3,
    title: "Upcycled Minimalist Cuff",
    basePrice: 18000,
    discountPrice: 11000,
    impact: "♻️ 0.3kg Linear Waste Diverted",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=80",
    description: "A sleek industrial cuff designed from salvaged metal composites.",
    specs: ["Material: Recycled Polymer & Surgical Steel"],
    variants: ["Polished Iron"],
    isHotSelling: false
  },
  {
    id: 4,
    title: "Artisan Organic Toy Bear",
    basePrice: 12000,
    discountPrice: 7500,
    impact: "♻️ 1.5kg Organic Waste Repurposed",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=700&q=80",
    description: "A beautiful, child-safe plush companion sewn completely from sterile, upcycled natural fabric fibers.",
    specs: ["Material: 100% Upcycled Cotton Fibers"],
    variants: ["Patchwork Brown"],
    isHotSelling: false
  }
];