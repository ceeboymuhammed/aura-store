"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "@/components/ui/Icon";
import { useState } from "react";

export default function ShopSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get("search") ?? ""
  );

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/shop?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full lg:w-96"
    >
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder="Search products..."
        className="w-full rounded-full border border-slate-300 bg-white py-3 pl-12 pr-5 outline-none transition focus:border-green-600"
      />
    </form>
  );
}