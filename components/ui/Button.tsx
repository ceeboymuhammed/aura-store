"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-green text-white hover:brightness-110 shadow-sm hover:shadow-lg",

    secondary:
      "bg-brand-charcoal text-white hover:bg-black",

    outline:
      "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white",

    ghost:
      "bg-transparent text-brand-charcoal hover:bg-neutral-100",
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",

    md: "h-12 px-7",

    lg: "h-14 px-9 text-lg",
  };

  return (
    <button
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}