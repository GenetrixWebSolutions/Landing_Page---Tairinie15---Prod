"use client";
import { motion } from "framer-motion";
import { INVITATION_CONTENT } from "@/constants/content";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-navy)]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        <span className="font-script text-4xl text-[var(--color-silver)]">{INVITATION_CONTENT.loadingName}</span>
        <div className="h-px w-40 overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--color-royal)] to-[var(--color-silver)]"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/40">{INVITATION_CONTENT.loadingText}</p>
      </motion.div>
    </motion.div>
  );
}
