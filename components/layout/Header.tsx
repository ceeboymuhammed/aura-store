"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import CartButton from "@/components/cart/CartButton";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import {
  ChevronDown,
  Menu,
  Search,
  X,
} from "@/components/ui/Icon";

interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
}

const navigation: NavItem[] = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "UpwardEco Network",
    children: [
      {
        label: "UpwardEco Website",
        href: "https://upwardeco.com.ng",
      },
      {
        label: "WasteWise AI",
        href: "https://wastewise-ai.vercel.app",
      },
      {
        label: "SendWaste",
        href: "https://sendwaste.com",
      },
      {
        label: "Contact UpwardEco",
        href: "https://upwardeco.com.ng/contact",
      },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-lg"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">

            <Link
              href="https://upwardeco.com.ng"
              target="_blank"
              className="flex items-center gap-3"
            >
              <Image
                src="/aura_store.png"
                alt="AURA Store"
                width={52}
                height={52}
                priority
              />

              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  AURA
                </h1>

                <p className="text-xs uppercase tracking-[0.28em] text-green-700">
                  Sustainable Store
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              {navigation.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="group relative"
                    >
                      <button className="flex items-center gap-2 font-medium text-slate-700 transition hover:text-green-700">
                        {item.label}

                        <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                      </button>

                      <div className="invisible absolute left-0 top-full mt-5 w-72 rounded-3xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            className="block rounded-2xl px-5 py-4 transition hover:bg-slate-100"
                          >
                            {child.label}
                          </Link>
                        ))}

                      </div>
                    </div>
                  );
                }

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href ?? "");

                return (
                  <Link
                    key={item.href}
                    href={item.href ?? "#"}
                    className={`relative font-medium transition ${
                      active
                        ? "text-green-700"
                        : "text-slate-700 hover:text-green-700"
                    }`}
                  >
                    {item.label}

                    {active && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-green-700" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button className="rounded-full p-3 transition hover:bg-slate-100">
                <Search size={20} />
              </button>

              <CartButton />

              <Link href="/shop">
                <Button size="sm">
                  Shop Now
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={28} />
            </button>

          </div>
        </Container>
      </header>

      <div className="h-20" />

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white p-8 shadow-2xl">

            <div className="mb-12 flex items-center justify-between">

              <Image
                src="/aura_store.png"
                alt="AURA Store"
                width={48}
                height={48}
              />

              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <X size={28} />
              </button>

            </div>

            <nav className="space-y-2">

              {navigation.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="space-y-2"
                    >
                      <p className="px-5 pt-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                        {item.label}
                      </p>

                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className="block rounded-2xl px-5 py-4 hover:bg-slate-100"
                        >
                          {child.label}
                        </Link>
                      ))}

                    </div>
                  );
                }

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href ?? "");

                return (
                  <Link
                    key={item.href}
                    href={item.href ?? "#"}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className={`block rounded-2xl px-5 py-4 text-lg font-medium ${
                      active
                        ? "bg-green-700 text-white"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

            </nav>

            <div className="mt-auto">

              <Link
                href="/shop"
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                <Button size="sm">
                  Shop Now
                </Button>
              </Link>

            </div>

          </aside>
        </>
      )}
    </>
  );
}