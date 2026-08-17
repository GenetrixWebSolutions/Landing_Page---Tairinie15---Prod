import { EVENT } from "@/constants/event";
import { CONTACT } from "@/constants/contact";
import { FOOTER_CONTENT } from "@/constants/content";

export function Footer() {
  const hasWhatsappNumber = Boolean(EVENT.whatsapp.number);
  const whatsappHref = hasWhatsappNumber
    ? `https://wa.me/${EVENT.whatsapp.number}?text=${encodeURIComponent(EVENT.whatsapp.defaultMessage)}`
    : "";
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[var(--color-navy)]/80 px-4 py-10 text-center backdrop-blur-sm sm:px-6">
      <p className="font-script text-2xl text-[var(--color-silver)]">{FOOTER_CONTENT.brandLabel}</p>
      <p className="mt-2 text-sm text-white/60">{EVENT.debutanteFullName} · {FOOTER_CONTENT.eventLabel}</p>
      {hasWhatsappNumber ? (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition hover:border-[var(--color-silver)] hover:text-white">
          {CONTACT.whatsappHelpButtonLabel}
        </a>
      ) : (
        <span aria-disabled="true" title={CONTACT.whatsappPendingTitle} className="mt-4 inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/35">
          {CONTACT.whatsappPendingLabel}
        </span>
      )}
      <p className="mt-6 text-xs text-white/30">{FOOTER_CONTENT.signature}</p>
    </footer>
  );
}
