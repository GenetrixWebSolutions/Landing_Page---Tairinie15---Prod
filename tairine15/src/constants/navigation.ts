export type NavItem = { label: string; href: string };

export const SECTION_IDS = {
  hero: "hero",
  about: "sobre",
  gallery: "fotografias",
  legacyTimeline: "linha-do-tempo",
  event: "festa",
  rsvp: "rsvp",
  location: "localizacao",
} as const;

export const SECTION_LINKS = {
  hero: `#${SECTION_IDS.hero}`,
  about: `#${SECTION_IDS.about}`,
  gallery: `#${SECTION_IDS.gallery}`,
  event: `#${SECTION_IDS.event}`,
  rsvp: `#${SECTION_IDS.rsvp}`,
  location: `#${SECTION_IDS.location}`,
} as const;

export const NAVIGATION_CONTENT = {
  brandSuffix: "15",
  desktopAriaLabel: "Navegação principal",
  mobileAriaLabel: "Navegação móvel",
  menuToggleLabel: "Abrir menu",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: SECTION_LINKS.hero },
  { label: "Sobre Tairine", href: SECTION_LINKS.about },
  { label: "Fotografias", href: SECTION_LINKS.gallery },
  { label: "Festa", href: SECTION_LINKS.event },
  { label: "Confirmar presença", href: SECTION_LINKS.rsvp },
  { label: "Localização", href: SECTION_LINKS.location },
];
