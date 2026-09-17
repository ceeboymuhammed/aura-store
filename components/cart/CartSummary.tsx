"use client";

import { useCart } from "@/context/CartContext";

import Button from "@/components/ui/Button";

export default function CartSummary() {
  const {
    items,
    totalItems,
    totalPrice,
  } = useCart();

  function checkout() {
    const phone = "2348168184783"; // Replace with your WhatsApp number

    const message = `
*AURA STORE ORDER*

${items
  .map(
    (item) =>
      `• ${item.name}
Qty: ${item.quantity}
₦${item.price.toLocaleString()}`
  )
  .join("\n\n")}

----------------------------

Total Items: ${totalItems}

Total: ₦${totalPrice.toLocaleString()}

Thank you.
`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  return (
    <div className="border-t bg-white p-6">

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Items</span>

          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span>
            ₦{totalPrice.toLocaleString()}
          </span>

        </div>

      </div>

      <div className="mt-6 space-y-3">

        <Button
          className="w-full"
          onClick={checkout}
        >
          Checkout via WhatsApp
        </Button>

      </div>

    </div>
  );
}