"use client";

import Button from "@/components/ui/Button";
import { MessageCircle } from "@/components/ui/Icon";

interface WhatsAppButtonProps {
  product: {
    name: string;
  };
  quantity?: number;
  variant?: string;
}

const PHONE_NUMBER = "2348026521855"; // Replace with your WhatsApp number

export default function WhatsAppButton({
  product,
  quantity = 1,
  variant,
}: WhatsAppButtonProps) {
  const message = `Hello AURA Store!

I'm interested in:

Product: ${product.name}
Quantity: ${quantity}
${variant ? `Variant: ${variant}` : ""}

Kindly assist me with placing my order.`;

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="secondary"
      fullWidth
      onClick={handleClick}
      className="gap-3"
    >
      <MessageCircle className="h-5 w-5" />
      Order via WhatsApp
    </Button>
  );
}