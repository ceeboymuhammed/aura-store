"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { ProductImage } from "@/types/product";

import {
  ChevronLeft,
  ChevronRight,
  X,
} from "@/components/ui/Icon";

interface ProductGalleryProps {
  images: ProductImage[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const gallery =
    images.length > 0
      ? images
      : [
          {
            id: "placeholder",
            product_id: "",
            image_url: "/images/placeholder-product.jpg",
            storage_path: "",
            alt_text: "Placeholder",
            sort_order: 1,
            is_primary: true,
          },
        ];

  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const previous = useCallback(() => {
    setActive((current) =>
      current === 0 ? gallery.length - 1 : current - 1
    );
  }, [gallery.length]);

  const next = useCallback(() => {
    setActive((current) =>
      current === gallery.length - 1 ? 0 : current + 1
    );
  }, [gallery.length]);

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          next();
          break;

        case "ArrowLeft":
          previous();
          break;

        case "Escape":
          setLightbox(false);
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [lightbox, next, previous]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[100px_1fr]">
        {/* Thumbnails */}

        <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
          {gallery.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActive(index)}
              className={`relative h-24 aspect-square overflow-hidden rounded-2xl border transition-all ${
                active === index
                  ? "border-brand-green ring-2 ring-brand-green"
                  : "border-neutral-200 hover:border-brand-green/50"
              }`}
            >
              <Image
                src={image.image_url}
                alt={image.alt_text}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Hero */}

        <motion.button
          layout
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
          onClick={() => setLightbox(true)}
          className="group relative order-1 aspect-square overflow-hidden rounded-3xl bg-neutral-100"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={gallery[active].id}
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="absolute inset-0"
            >
              <Image
                src={gallery[active].image_url}
                alt={gallery[active].alt_text}
                fill
                priority
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur">
            {active + 1} / {gallery.length}
          </div>
        </motion.button>
      </div>

      {/* Lightbox */}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95"
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute right-8 top-8 z-10 text-white transition hover:scale-110"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={previous}
              className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex h-full items-center justify-center p-10">
              <div className="relative h-full w-full max-w-6xl">
                <Image
                  src={gallery[active].image_url}
                  alt={gallery[active].alt_text}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}