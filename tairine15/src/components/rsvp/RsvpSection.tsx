"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/Card";
import { GuestSearchForm } from "@/components/rsvp/GuestSearchForm";
import { RsvpForm } from "@/components/rsvp/RsvpForm";
import { UI_MESSAGES } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import type { GuestDetailDTO, GuestSearchResult } from "@/types/guest";

export function RsvpSection() {
  const [selectedGuest, setSelectedGuest] = useState<GuestDetailDTO | null>(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  async function handleSelectGuest(guest: GuestSearchResult) {
    setIsLoadingDetail(true);
    try {
      const response = await fetch(`/api/guests/search?query=${encodeURIComponent(guest.name)}`);
      const data = await response.json();
      const match = data.results?.find((r: GuestSearchResult) => r.id === guest.id) ?? guest;
      setSelectedGuest({ ...match, members: [], rsvpStatus: null });
    } finally { setIsLoadingDetail(false); }
  }

  return (
    <section id={SECTION_IDS.rsvp} className="px-6 py-24">
      <div className="mx-auto max-w-xl">
        <SectionHeading eyebrow={UI_MESSAGES.rsvpSectionEyebrow} title={UI_MESSAGES.rsvpSectionTitle} />
        {!selectedGuest && (
          <>
            <GuestSearchForm onSelectGuest={handleSelectGuest} />
            {isLoadingDetail && <p className="mt-4 text-center text-sm text-white/50">{UI_MESSAGES.rsvpLoadingInvite}</p>}
          </>
        )}
        {selectedGuest && (
          <>
            <p className="mb-4 text-center text-sm text-white/70">{UI_MESSAGES.searchWelcome(selectedGuest.name)}</p>
            <RsvpForm guest={selectedGuest} />
            <button type="button" onClick={() => setSelectedGuest(null)} className="mx-auto mt-4 block text-xs text-white/40 underline underline-offset-4 hover:text-white/70">{UI_MESSAGES.rsvpSearchAgain}</button>
          </>
        )}
      </div>
    </section>
  );
}
