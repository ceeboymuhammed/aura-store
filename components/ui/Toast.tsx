"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "@/components/ui/Icon";

interface ToastProps {
  show: boolean;
  message: string;
}

export default function Toast({
  show,
  message,
}: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 z-[999] flex -translate-x-1/2 items-center gap-3 rounded-full bg-brand-charcoal px-5 py-3 text-white shadow-2xl"
        >
          <CheckCircle2 className="h-5 w-5 text-brand-green" />
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}