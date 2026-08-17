import { INTERESTS_CONTENT } from "@/constants/content";
import { SectionHeading } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";

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
          <svg viewBox="0 0 320 320" className="mx-auto w-full max-w-[17rem] sm:max-w-sm" aria-hidden="true">
            <circle cx="160" cy="160" r="120" stroke="var(--color-royal)" strokeWidth="1" fill="none" opacity="0.4" />
            <polygon points="160,60 240,220 80,220" stroke="var(--color-silver)" strokeWidth="1" fill="none" opacity="0.5" />
            <line x1="40" y1="160" x2="280" y2="160" stroke="var(--color-silver)" strokeWidth="0.5" opacity="0.3" />
            <line x1="160" y1="40" x2="160" y2="280" stroke="var(--color-silver)" strokeWidth="0.5" opacity="0.3" />
            <circle cx="160" cy="160" r="4" fill="var(--color-gold-accent)" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
