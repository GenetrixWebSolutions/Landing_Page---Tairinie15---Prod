"use client";
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { HOBBIES_CONTENT } from "@/constants/content";
import { SectionHeading, Card } from "@/components/ui/Card";

const ICONS: Record<string, ReactElement> = {
  pencil: <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />,
  book: <path d="M4 5a2 2 0 012-2h6v18H6a2 2 0 01-2-2V5zM20 5a2 2 0 00-2-2h-6v18h6a2 2 0 002-2V5z" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  music: <path d="M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM20 16a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  spark: <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />,
};

export function HobbiesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={HOBBIES_CONTENT.title} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {HOBBIES_CONTENT.hobbies.map((hobby, i) => (
            <motion.div key={hobby.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.35, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -6 }}>
              <Card className="flex min-h-32 flex-col items-center justify-center gap-3 px-3 py-6 text-center sm:py-8">
                <svg width="32" height="32" viewBox="0 0 24 24" className="text-[var(--color-silver)]">{ICONS[hobby.icon]}</svg>
                <p className="text-sm text-white/90">{hobby.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
