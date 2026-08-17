import { CLOSING_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";
import { Reveal } from "@/components/animations/Reveal";

export function ClosingSection() {
  const date = new Date(EVENT.partyDateISO).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  return (
    <section className="relative overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(43,75,176,0.3),transparent_70%)]" aria-hidden="true" />
      <div className="mx-auto max-w-2xl">
        <Reveal><p className="font-serif text-xl leading-relaxed text-white sm:text-3xl">{CLOSING_CONTENT.mainMessage}</p></Reveal>
        <Reveal delay={0.2} className="mt-6"><p className="font-script text-2xl leading-snug text-[var(--color-silver)] sm:text-4xl">{CLOSING_CONTENT.finalMessage}</p></Reveal>
        <Reveal delay={0.35} className="mt-10">
          <p className="font-script text-2xl text-white">{EVENT.debutanteFirstName}</p>
          <p className="mt-1 text-sm text-white/50">{date}</p>
        </Reveal>
      </div>
    </section>
  );
}
