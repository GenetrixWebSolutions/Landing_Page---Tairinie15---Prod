import Image from "next/image";
import { ABOUT_CONTENT, MEDIA_CONTENT } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import { Reveal } from "@/components/animations/Reveal";

export function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <Reveal direction="right" className="order-2 md:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-white/10 min-[390px]:max-w-sm md:max-w-md">
            <Image src={MEDIA_CONTENT.images.about.src} alt={MEDIA_CONTENT.images.about.alt} fill sizes="(max-width: 768px) 90vw, 450px" className="object-cover" />
          </div>
        </Reveal>
        <Reveal direction="left" delay={0.15} className="order-1 text-center md:order-2 md:text-left">
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.35em]">{ABOUT_CONTENT.eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,10vw,3rem)] leading-tight text-white sm:text-5xl">{ABOUT_CONTENT.title}</h2>
          <p className="mt-4 font-script text-2xl text-[var(--color-silver)]">{ABOUT_CONTENT.fullName}</p>
          <p className="mt-1 text-sm text-white/50">{ABOUT_CONTENT.birthLabel}</p>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80 md:mx-0 md:mt-6">{ABOUT_CONTENT.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
