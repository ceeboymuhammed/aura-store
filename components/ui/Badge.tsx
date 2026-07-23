import { ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "outline"
  | "neutral";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-green-100 text-green-800 border border-green-200",

    secondary:
      "bg-amber-100 text-amber-800 border border-amber-200",

    success:
      "bg-emerald-100 text-emerald-800 border border-emerald-200",

    outline:
      "bg-white text-slate-700 border border-slate-300",

    neutral:
      "bg-slate-100 text-slate-700 border border-slate-200",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-4
        py-1.5
        text-xs
        font-semibold
        uppercase
        tracking-wider
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}