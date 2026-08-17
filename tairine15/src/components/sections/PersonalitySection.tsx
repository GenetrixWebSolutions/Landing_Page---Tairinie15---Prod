"use client";
import { motion } from "framer-motion";
import { PERSONALITY_CONTENT } from "@/constants/content";
import { SectionHeading } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";

export function PersonalitySection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={PERSONALITY_CONTENT.eyebrow} title={PERSONALITY_CONTENT.title} />
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {PERSONALITY_CONTENT.traits.map((trait, i) => (
            <motion.span key={trait} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.35, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.6, delay: i * 0.08 }} className="animate-float-slow rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white/90 backdrop-blur-sm sm:px-6 sm:py-3 sm:text-base" style={{ animationDelay: `${i * 0.4}s` }}>
              {trait}
            </motion.span>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-10 text-center sm:mt-14">
          <p className="font-script text-2xl leading-snug text-[var(--color-silver)] sm:text-4xl">&ldquo;{PERSONALITY_CONTENT.quote}&rdquo;</p>
        </Reveal>
      </div>
    </section>
  );
}
