"use client";
import { motion } from "framer-motion";
import { FAVORITE_COLORS_CONTENT } from "@/constants/content";
import { SectionHeading } from "@/components/ui/Card";

export function FavoriteColorsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={FAVORITE_COLORS_CONTENT.title} />
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {FAVORITE_COLORS_CONTENT.colors.map((color, i) => (
            <motion.div key={color.name} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.35, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.6, delay: i * 0.12 }} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left sm:block sm:p-6 sm:text-center">
              <div className="relative h-14 w-14 shrink-0 sm:mx-auto sm:mb-4">
                <div className="absolute inset-1 rounded-full opacity-60 blur-md" style={{ backgroundColor: color.hex }} aria-hidden="true" />
                <div className="relative h-full w-full rounded-full border border-white/20 shadow-[inset_0_1px_6px_rgba(255,255,255,0.22)]" style={{ backgroundColor: color.hex }} aria-hidden="true" />
              </div>
              <div>
                <p className="font-serif text-lg text-white">{color.name}</p>
                <p className="mt-0.5 text-sm text-white/60 sm:mt-1">{color.meaning}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
