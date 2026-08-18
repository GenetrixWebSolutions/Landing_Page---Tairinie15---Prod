"use client";
import { motion } from "framer-motion";
import { INTERESTS_CONTENT } from "@/constants/content";
import { SectionHeading } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const drawTransition = (delay: number) => ({
  duration: 1.25,
  delay,
  ease: [0.22, 1, 0.36, 1] as const,
});

function KnowledgeMap() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const drawn = prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 };
  const initial = prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 };

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-sm"
      animate={prefersReducedMotion ? undefined : { y: [0, -7, 0], rotate: [-0.35, 0.35, -0.35] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div className="absolute inset-[18%] rounded-full bg-[var(--color-royal)]/15 blur-3xl" />
      <motion.svg
        viewBox="0 0 360 360"
        className="relative h-full w-full overflow-visible drop-shadow-[0_0_20px_rgba(43,75,176,0.22)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.45 }}
      >
        <motion.circle
          cx="180" cy="180" r="126" fill="none" stroke="var(--color-royal)" strokeWidth="1.25" strokeDasharray="7 5"
          initial={initial}
          animate={prefersReducedMotion ? drawn : { pathLength: 1, opacity: 1, rotate: 360 }}
          transition={prefersReducedMotion ? drawTransition(0) : { pathLength: drawTransition(0), opacity: drawTransition(0), rotate: { duration: 28, repeat: Infinity, ease: "linear" } }}
          style={{ transformOrigin: "180px 180px" }}
        />
        <motion.circle
          cx="180" cy="180" r="94" fill="none" stroke="var(--color-silver)" strokeWidth="0.75" strokeDasharray="3 9" opacity="0.32"
          initial={initial}
          animate={prefersReducedMotion ? drawn : { pathLength: 1, opacity: 0.32, rotate: -360 }}
          transition={prefersReducedMotion ? drawTransition(0.15) : { pathLength: drawTransition(0.15), opacity: drawTransition(0.15), rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
          style={{ transformOrigin: "180px 180px" }}
        />

        <motion.path
          d="M180 72 L267 235 L93 235 Z" fill="rgba(43,75,176,0.035)" stroke="var(--color-silver)" strokeWidth="1.15"
          initial={initial}
          animate={prefersReducedMotion ? drawn : { pathLength: 1, opacity: 1, rotate: [-2, 2, -2], scale: [0.98, 1.02, 0.98] }}
          transition={prefersReducedMotion ? drawTransition(0.28) : { pathLength: drawTransition(0.28), opacity: drawTransition(0.28), rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
          style={{ transformOrigin: "180px 180px" }}
        />
        <motion.path d="M60 180 H300" fill="none" stroke="var(--color-silver)" strokeWidth="0.9" initial={initial} animate={drawn} transition={drawTransition(0.5)} />
        <motion.path d="M180 52 V278" fill="none" stroke="var(--color-silver)" strokeWidth="0.65" opacity="0.35" initial={initial} animate={drawn} transition={drawTransition(0.62)} />

        {[94, 139, 180, 221, 266].map((x, index) => (
          <motion.g
            key={x}
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0 }}
            animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.45, 1, 0.45], scale: [0.85, 1.2, 0.85] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 2.8, delay: 0.85 + index * 0.28, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: `${x}px 180px` }}
          >
            <circle cx={x} cy="180" r={index === 2 ? 5 : 3.5} fill={index === 2 ? "var(--color-gold-accent)" : "var(--color-silver)"} />
            {index !== 2 && <circle cx={x} cy="180" r="8" fill="none" stroke="var(--color-silver)" strokeWidth="0.5" opacity="0.35" />}
          </motion.g>
        ))}

        <motion.circle
          cy="180"
          r="3.5"
          fill="var(--color-gold-accent)"
          initial={{ cx: 68, opacity: 0 }}
          animate={prefersReducedMotion ? { cx: 180, opacity: 0.9 } : { cx: [68, 292, 68], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.12, 0.88, 1] }}
          style={{ filter: "drop-shadow(0 0 8px rgba(201,162,75,0.95))" }}
        />

        <motion.g initial={prefersReducedMotion ? undefined : { opacity: 0 }} animate={{ opacity: 0.72 }} transition={{ duration: 0.8, delay: 1.25 }}>
          <text x="180" y="43" textAnchor="middle" fill="var(--color-silver)" fontSize="9" letterSpacing="2.4">GEOMETRIA</text>
          <text x="180" y="306" textAnchor="middle" fill="var(--color-silver)" fontSize="9" letterSpacing="2.4">LINHA DO TEMPO</text>
          <text x="84" y="199" textAnchor="middle" fill="var(--color-silver)" fontSize="7" opacity="0.65">PASSADO</text>
          <text x="276" y="199" textAnchor="middle" fill="var(--color-silver)" fontSize="7" opacity="0.65">PRESENTE</text>
        </motion.g>

        <motion.circle
          cx="180"
          cy="54"
          r="4.5"
          fill="var(--color-gold-accent)"
          animate={prefersReducedMotion ? undefined : { rotate: 360, scale: [1, 1.35, 1] }}
          transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut" } }}
          style={{ transformOrigin: "180px 180px", filter: "drop-shadow(0 0 7px rgba(201,162,75,0.9))" }}
        />
        <motion.circle cx="180" cy="180" r="4.5" fill="var(--color-gold-accent)" animate={prefersReducedMotion ? undefined : { opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.4, repeat: Infinity }} />
      </motion.svg>
    </motion.div>
  );
}

export function InterestsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <Reveal className="text-center md:text-left">
          <SectionHeading className="md:text-left" title={INTERESTS_CONTENT.title} />
          <div className="mb-4 flex flex-wrap justify-center gap-3 md:justify-start">
            {INTERESTS_CONTENT.subjects.map((subject) => (
              <span key={subject} className="rounded-full border border-[var(--color-silver)]/40 px-4 py-1.5 text-sm text-[var(--color-silver)]">{subject}</span>
            ))}
          </div>
          <p className="mx-auto max-w-md text-base leading-relaxed text-white/80 md:mx-0">{INTERESTS_CONTENT.text}</p>
        </Reveal>
        <Reveal direction="left" delay={0.15}>
          <KnowledgeMap />
        </Reveal>
      </div>
    </section>
  );
}
