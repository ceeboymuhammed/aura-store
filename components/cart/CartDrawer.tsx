"use client";

import Image from "next/image";

import { useCart } from "@/context/CartContext";

import Button from "@/components/ui/Button";

import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "@/components/ui/Icon";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increase,
    decrease,
    removeItem,
    totalItems,
    totalPrice,
  } = useCart();

  const message = encodeURIComponent(`
Hello UpwardEco,

I'd like to place an order.

${items
    .map(
      (item) =>
        `• ${item.name}
Qty: ${item.quantity}
₦${item.price.toLocaleString()}`
    )
    .join("\n\n")}

--------------------------

Total: ₦${totalPrice.toLocaleString()}

Thank you.
`);

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] bg-black/40 transition ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-[100] flex h-screen w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold">
              Shopping Cart
            </h2>

            <p className="text-sm text-slate-500">
              {totalItems} item(s)
            </p>
          </div>

          <button
            onClick={closeCart}
            className="rounded-full p-2 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-8 text-center">
              <ShoppingBag className="h-14 w-14 text-slate-300" />

              <h3 className="mt-6 text-xl font-bold">
                Your cart is empty
              </h3>

              <p className="mt-2 text-slate-500">
                Add products to begin your order.
              </p>
            </div>
          ) : (
            <div className="space-y-5 p-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p className="mt-1 font-bold text-green-700">
                      ₦{item.price.toLocaleString()}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-full border">
                        <button
                          onClick={() =>
                            decrease(item.id)
                          }
                          className="p-2"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increase(item.id)
                          }
                          className="p-2"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-medium">
              Total
            </span>

            <span className="text-3xl font-bold">
              ₦{totalPrice.toLocaleString()}
            </span>
          </div>

          <Button
            className="w-full"
            onClick={() => {
              window.open(
                `https://wa.me/2348026521855?text=${message}`,
                "_blank"
              );

              closeCart();
            }}
          >
            Checkout on WhatsApp
          </Button>
        </div>
      </aside>
    </>
  );
}