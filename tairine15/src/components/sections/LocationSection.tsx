"use client";
import { LOCATION_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";
import { SECTION_IDS } from "@/constants/navigation";
import { SectionHeading } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function LocationSection() {
  const encodedAddress = encodeURIComponent(EVENT.locationQuery);
  const embedSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  return (
    <section id={SECTION_IDS.location} className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={LOCATION_CONTENT.eyebrow} title={LOCATION_CONTENT.title} />
        <Reveal className="mb-6 text-center">
          <p className="font-serif text-2xl leading-tight text-white">{EVENT.venueName}</p>
          <p className="mt-1 text-sm text-white/60">{EVENT.cityState}</p>
        </Reveal>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe title={LOCATION_CONTENT.mapTitle} src={embedSrc} width="100%" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full grayscale-[0.3] contrast-[1.05] sm:h-[360px]" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-6 grid w-full max-w-sm gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4">
          <Button variant="secondary" className="w-full sm:w-auto" onClick={() => window.open(EVENT.maps.googleMapsUrl, "_blank")}>{LOCATION_CONTENT.buttons.googleMaps}</Button>
        </Reveal>
      </div>
    </section>
  );
}
