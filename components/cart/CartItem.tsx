"use client";

import Image from "next/image";

import { useCart, CartItem as Item } from "@/context/CartContext";

import Button from "@/components/ui/Button";

interface CartItemProps {
  item: Item;
}

export default function CartItem({
  item,
}: CartItemProps) {
  const {
    increase,
    decrease,
    removeItem,
  } = useCart();

  return (
    <div className="flex gap-4 rounded-2xl border border-neutral-200 p-4">

      <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-neutral-100">

        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="96px"
          className="object-cover"
        />

      </div>

      <div className="flex flex-1 flex-col">

        <h3 className="font-semibold">
          {item.name}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          ₦{item.price.toLocaleString()}
        </p>

        <div className="mt-auto flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Button
              size="sm"
              variant="secondary"
              onClick={() => decrease(item.id)}
            >
              −
            </Button>

            <span className="w-6 text-center font-semibold">
              {item.quantity}
            </span>

            <Button
              size="sm"
              variant="secondary"
              onClick={() => increase(item.id)}
            >
              +
            </Button>

          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-sm font-medium text-red-500 hover:text-red-700"
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}