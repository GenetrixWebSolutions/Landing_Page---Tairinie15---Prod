"use client";
import { EVENT_INFO_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";
import { SECTION_IDS, SECTION_LINKS, scrollToSection } from "@/constants/navigation";
import { SectionHeading, Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function EventInfoSection() {
  const date = new Date(EVENT.partyDateISO);
  const formattedDate = date.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
  const formattedTime = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const locationText = EVENT.address ? `${EVENT.address}, ${EVENT.cityState}` : EVENT.cityState;
  const timeText = EVENT.partyEndTime ? `${formattedTime} ${EVENT_INFO_CONTENT.approximateEndPrefix} ${EVENT.partyEndTime}` : formattedTime;
  const hasNotes = Boolean(EVENT.arrivalNotes || EVENT.parkingInfo);

  return (
    <section id={SECTION_IDS.event} className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={EVENT_INFO_CONTENT.eyebrow} title={EVENT_INFO_CONTENT.title} />
        <Reveal>
          <Card className="grid gap-5 min-[390px]:grid-cols-2 sm:gap-6">
            <div><p className="text-xs uppercase tracking-wider text-white/50">{EVENT_INFO_CONTENT.labels.date}</p><p className="mt-1 text-white">{formattedDate}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-white/50">{EVENT_INFO_CONTENT.labels.time}</p><p className="mt-1 text-white">{timeText}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-white/50">{EVENT_INFO_CONTENT.labels.venue}</p><p className="mt-1 text-white">{EVENT.venueName}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-white/50">{EVENT_INFO_CONTENT.labels.address}</p><p className="mt-1 text-white">{locationText}</p></div>
            {hasNotes && (
              <div className="min-[390px]:col-span-2">
                <p className="text-xs uppercase tracking-wider text-white/50">{EVENT_INFO_CONTENT.labels.notes}</p>
                {EVENT.arrivalNotes && <p className="mt-1 text-white/80">{EVENT.arrivalNotes}</p>}
                {EVENT.parkingInfo && <p className="mt-1 text-white/60 text-sm">{EVENT.parkingInfo}</p>}
              </div>
            )}
          </Card>
        </Reveal>
        <Reveal delay={0.15} className="mx-auto mt-8 grid w-full max-w-sm gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4">
          <Button variant="secondary" className="w-full sm:w-auto" onClick={() => window.open(EVENT.maps.googleMapsUrl, "_blank")}>{EVENT_INFO_CONTENT.buttons.googleMaps}</Button>
          <Button className="w-full sm:w-auto" onClick={() => scrollToSection(SECTION_LINKS.rsvp)}>{EVENT_INFO_CONTENT.buttons.rsvp}</Button>
        </Reveal>
      </div>
    </section>
  );
}
