"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FOOTER_CONTENT, HERO_CONTENT } from "@/constants/content";
import { NAVIGATION_CONTENT, NAV_ITEMS, SECTION_LINKS, scrollToSection } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setIsScrolled(window.scrollY > 40); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-[calc(env(safe-area-inset-top)+0.75rem)] z-40 px-3 sm:px-4">
      <div
        className={clsx(
          "pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 shadow-[0_14px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-500 sm:px-5 sm:py-3",
          isScrolled ? "border-white/15 bg-[var(--color-navy)]/72" : "border-white/10 bg-[var(--color-navy)]/42"
        )}
      >
        <a href={SECTION_LINKS.hero} className="inline-flex min-h-11 items-center font-script text-2xl text-[var(--color-silver)]">
          {FOOTER_CONTENT.brandLabel} {NAVIGATION_CONTENT.brandSuffix}
        </a>
        <nav className="hidden items-center gap-5 lg:flex lg:gap-7" aria-label={NAVIGATION_CONTENT.desktopAriaLabel}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-white/80 transition-colors hover:text-white">{item.label}</a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button size="md" onClick={() => scrollToSection(SECTION_LINKS.rsvp)}>{HERO_CONTENT.primaryButtonLabel}</Button>
        </div>
        <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 lg:hidden" aria-expanded={isMenuOpen} aria-label={NAVIGATION_CONTENT.menuToggleLabel} onClick={() => setIsMenuOpen((v) => !v)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="pointer-events-auto mx-auto mt-3 flex max-w-sm flex-col gap-1 rounded-[1.5rem] border border-white/10 bg-[var(--color-navy)]/92 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:hidden" aria-label={NAVIGATION_CONTENT.mobileAriaLabel}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 text-white/90 hover:bg-white/5">{item.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
