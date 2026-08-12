"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "@/components/ui/Icon";
import { useCart } from "@/context/CartContext"; // Adjust import path if needed

export default function CartButton() {
  const { totalItems, openCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  // Prevent SSR/Client hydration mismatch by rendering totalItems only after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button
      onClick={openCart}
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
      aria-label="Shopping Cart"
    >
      <ShoppingBag className="h-5 w-5" />

      {isMounted && totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-[10px] font-bold text-white shadow-xs">
          {totalItems}
        </span>
      )}
    </button>
  );
}