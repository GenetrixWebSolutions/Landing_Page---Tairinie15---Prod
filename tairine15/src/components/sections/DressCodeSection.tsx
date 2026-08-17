import { EVENT } from "@/constants/event";
import { SectionHeading, Card } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";

export function DressCodeSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title={EVENT.legacyDressCode.title} />
        <Reveal>
          <Card className="text-center">
            <p className="text-base text-white/85">{EVENT.legacyDressCode.intro}</p>
            <p className="mt-4 font-serif text-lg text-[var(--color-silver)]">{EVENT.legacyDressCode.suggestion}</p>
            <p className="mt-4 text-sm text-white/60">{EVENT.legacyDressCode.reservedColorsNote}</p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
