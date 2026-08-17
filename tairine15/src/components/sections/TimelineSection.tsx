import { LEGACY_TIMELINE_CONTENT } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import { SectionHeading } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";

export function TimelineSection() {
  return (
    <section id={SECTION_IDS.legacyTimeline} className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={LEGACY_TIMELINE_CONTENT.title} />
        <div className="relative border-l border-white/15 pl-8">
          {LEGACY_TIMELINE_CONTENT.milestones.map((milestone, i) => (
            <Reveal key={milestone.year} delay={i * 0.08} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-[var(--color-silver)] shadow-[0_0_12px_rgba(199,208,224,0.8)]" aria-hidden="true" />
              <p className="font-serif text-2xl text-white">{milestone.year}</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-silver)]">{milestone.title}</p>
              <p className="mt-2 max-w-md text-sm text-white/70">{milestone.text}</p>
              <p className="mt-1 text-xs italic text-white/40">{milestone.memory}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
