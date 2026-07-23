import clsx from "clsx";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight text-brand-charcoal lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}