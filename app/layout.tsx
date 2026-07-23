import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { CartProvider } from "@/context/CartContext";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurastore.com.ng"),

  title: {
    default: "AURA Store | Sustainable Products by UpwardEco",
    template: "%s | AURA Store",
  },

  description:
    "Shop handcrafted bags, accessories, home décor and lifestyle products made from recovered materials by UpwardEco.",

  keywords: [
    "AURA Store",
    "UpwardEco",
    "Sustainable Products",
    "Eco Bags",
    "Upcycled Products",
    "Recovered Materials",
    "Circular Economy",
    "Sustainable Fashion",
    "Nigeria",
    "Eco Store",
    "Ankara Bags",
    "Handcrafted Accessories",
  ],

  authors: [
    {
      name: "UpwardEco Ltd",
    },
  ],

  creator: "UpwardEco Ltd",

  publisher: "UpwardEco Ltd",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "AURA Store",

    description:
      "Premium handcrafted sustainable products made from recovered materials.",

    url: "https://aurastore.com.ng",

    siteName: "AURA Store",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/aura_store.png",
        width: 1200,
        height: 630,
        alt: "AURA Store",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "AURA Store",

    description:
      "Premium handcrafted sustainable products made from recovered materials.",

    images: ["/aura_store.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-white text-slate-900 antialiased`}
      >
        <CartProvider>

          <Header />

          <CartDrawer />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

        </CartProvider>
      </body>
    </html>
  );
}