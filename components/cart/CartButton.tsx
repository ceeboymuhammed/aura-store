"use client";

import { ShoppingBag } from "@/components/ui/Icon";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const {
    totalItems,
    openCart,
  } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative rounded-full p-3 transition hover:bg-slate-100"
      aria-label="Shopping Cart"
    >
      <ShoppingBag className="h-6 w-6" />

      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}