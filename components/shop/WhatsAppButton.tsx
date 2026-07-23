"use client";

import Button from "@/components/ui/Button";
import { MessageCircle } from "@/components/ui/Icon";

import { Product } from "@/types/product";

interface WhatsAppButtonProps {
  product: Product;
  quantity: number;
  variant?: string;
}

export default function WhatsAppButton({
  product,
  quantity,
  variant,
}: WhatsAppButtonProps) {

  const message = encodeURIComponent(
`Hello AURA,

I'm interested in:

Product: ${product.name}
${variant ? `Variant: ${variant}` : ""}
Quantity: ${quantity}

Please send me payment and delivery information.`
  );

  return (
 <a
  href={`https://wa.me/${2348026521855}?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="secondary"
    className="w-full gap-3 rounded-full"
  >
    <MessageCircle className="h-5 w-5" />
    Order via WhatsApp
  </Button>
</a>
  );
}