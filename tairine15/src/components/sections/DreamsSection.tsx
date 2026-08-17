"use client";
import { motion } from "framer-motion";
import { DREAMS_CONTENT } from "@/constants/content";

export function DreamsSection() {
  const words = DREAMS_CONTENT.text.split(" ");
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--color-royal)]/15 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--color-silver)]/80 sm:mb-8">{DREAMS_CONTENT.title}</p>
        <p className="font-serif text-lg leading-relaxed text-white sm:text-2xl">
          {words.map((word, i) => (
            <motion.span key={i} initial={{ opacity: 0.15 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.4, delay: i * 0.04 }} className="mr-1.5 inline-block">
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
