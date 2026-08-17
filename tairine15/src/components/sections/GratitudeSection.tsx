import Image from "next/image";
import { GRATITUDE_CONTENT, MEDIA_CONTENT } from "@/constants/content";
import { Reveal } from "@/components/animations/Reveal";

export function GratitudeSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <Reveal className="text-center md:text-left">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.35em]">{GRATITUDE_CONTENT.title}</p>
          <p className="mx-auto max-w-md text-base leading-relaxed text-white/85 sm:text-lg md:mx-0">{GRATITUDE_CONTENT.text}</p>
        </Reveal>
        <Reveal direction="left" delay={0.15}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 md:max-w-md">
            <Image src={MEDIA_CONTENT.images.gratitude.src} alt={MEDIA_CONTENT.images.gratitude.alt} fill sizes="(max-width: 768px) 90vw, 450px" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
