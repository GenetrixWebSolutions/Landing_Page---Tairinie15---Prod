import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuestByCode } from "@/services/guestService";
import { RsvpCallToActionSection } from "@/components/sections/RsvpCallToActionSection";
import { StarfieldBackground } from "@/components/animations/StarfieldBackground";
import { PERSONAL_INVITATION_CONTENT } from "@/constants/content";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function ConvitePage({ params }: { params: Promise<{ codigo: string }> }) {
  const { codigo } = await params;
  const guest = await getGuestByCode(codigo);
  if (!guest || !guest.isActive) notFound();

  return (
    <>
      <StarfieldBackground />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-silver)]/80">{PERSONAL_INVITATION_CONTENT.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl text-white">{PERSONAL_INVITATION_CONTENT.greeting(guest.name)}</h1>
        <p className="mt-2 max-w-md text-white/70">{PERSONAL_INVITATION_CONTENT.message}</p>
      </main>
      <RsvpCallToActionSection />
    </>
  );
}
