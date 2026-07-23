"use client";

import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">

      {items.map((item, index) => {

        const last = index === items.length - 1;

        return (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            {last ? (
              <span className="font-medium text-slate-900">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href ?? "#"}
                className="transition hover:text-green-700"
              >
                {item.label}
              </Link>
            )}

            {!last && (
              <ChevronRight className="h-4 w-4" />
            )}
          </div>
        );
      })}

    </nav>
  );
}