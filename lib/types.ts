// lib/types.ts

export interface DatabaseProduct {
  id: number;
  vendor_id?: number | null;
  title: string;
  description: string;
  base_price: number;
  discount_price?: number | null;
  eco_badge_text?: string | null;
  is_hot_selling?: boolean | null;
  stock_quantity?: number | null;
  created_at?: string;
}