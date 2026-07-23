import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-5",
    md: "p-7",
    lg: "p-10",
  };

  return (
    <div
      className={`
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        ${paddingClasses[padding]}
        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1.5 hover:border-green-200 hover:shadow-[0_20px_50px_rgba(22,101,52,0.12)]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}