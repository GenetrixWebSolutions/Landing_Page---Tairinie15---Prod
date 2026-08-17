"use client";
import { motion } from "framer-motion";
import { NAME_MEANING_CONTENT } from "@/constants/content";
import { SectionHeading } from "@/components/ui/Card";

export function NameMeaningSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={NAME_MEANING_CONTENT.title} />
        <div className="grid gap-4 sm:grid-cols-2">
          {NAME_MEANING_CONTENT.meanings.map((meaning, i) => (
            <motion.div key={meaning} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.35, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.8, delay: i * 0.12 }} className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-5 text-center sm:p-6">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" initial={{ x: "-100%" }} whileInView={{ x: "100%" }} viewport={{ once: false, amount: 0.35, margin: "-10% 0px -10% 0px" }} transition={{ duration: 1.2, delay: i * 0.15 }} />
              <p className="relative font-serif text-lg leading-snug text-white sm:text-xl">{meaning}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
