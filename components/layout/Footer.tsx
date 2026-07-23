import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-950 text-slate-300">

      <Container>

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <Image
                src="/aura_store.png"
                alt="AURA Store"
                width={54}
                height={54}
              />

              <div>

                <h3 className="text-xl font-bold text-white">
                  AURA Store
                </h3>

                <p className="text-sm text-green-400">
                  by UpwardEco
                </p>

              </div>

            </div>

            <p className="leading-8 text-slate-400">
              Handcrafted sustainable products made from recovered
              materials. Every purchase supports waste recovery,
              circular economy initiatives and local artisans.
            </p>

          </div>

          {/* Shop */}

          <div>

            <h4 className="mb-6 text-lg font-semibold text-white">
              Shop
            </h4>

            <div className="space-y-4">

              <Link
                href="/shop"
                className="block hover:text-green-400"
              >
                Shop
              </Link>

              <Link
                href="/collections"
                className="block hover:text-green-400"
              >
                Collections
              </Link>

            </div>

          </div>

          {/* Customer Care */}

          <div>

            <h4 className="mb-6 text-lg font-semibold text-white">
              Customer Care
            </h4>

            <div className="space-y-4">

              <Link
                href="/shipping"
                className="block hover:text-green-400"
              >
                Shipping & Delivery
              </Link>

              <Link
                href="/returns"
                className="block hover:text-green-400"
              >
                Returns & Exchanges
              </Link>

              <Link
                href="/faq"
                className="block hover:text-green-400"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="block hover:text-green-400"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4 className="mb-6 text-lg font-semibold text-white">
              Company
            </h4>

            <div className="space-y-4">

              <Link
                href="https://upwardeco.com.ng/about"
                target="_blank"
                className="block hover:text-green-400"
              >
                About UpwardEco
              </Link>

              <Link
                href="/privacy"
                className="block hover:text-green-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block hover:text-green-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="https://upwardeco.com.ng"
                target="_blank"
                className="block hover:text-green-400"
              >
                UpwardEco Website
              </Link>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 py-8 text-sm md:flex-row">

          <p className="text-center text-slate-500 md:text-left">
            © {year} AURA Store by UpwardEco Ltd. All rights
            reserved.
          </p>

<div className="flex flex-wrap items-center gap-6">

  <Link
    href="https://www.linkedin.com/company/upwardeco"
    target="_blank"
    className="hover:text-green-400 transition-colors"
  >
    LinkedIn
  </Link>

  <Link
    href="https://facebook.com/upwardeco"
    target="_blank"
    className="hover:text-green-400 transition-colors"
  >
    Facebook
  </Link>

  <Link
    href="https://instagram.com/upwardeco"
    target="_blank"
    className="hover:text-green-400 transition-colors"
  >
    Instagram
  </Link>

  <Link
    href="https://tiktok.com/upwardeco"
    target="_blank"
    className="hover:text-green-400 transition-colors"
  >
    TikTok
  </Link>

  <Link
    href="https://youtube.com/upwardeco"
    target="_blank"
    className="hover:text-green-400 transition-colors"
  >
    YouTube
  </Link>

  <Link
    href="https://wa.me/2348026521855"
    target="_blank"
    className="hover:text-green-400 transition-colors"
  >
    WhatsApp
  </Link>

</div>
        </div>

      </Container>

    </footer>
  );
}