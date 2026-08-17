const EVENT_LOCATION_QUERY = "Salão Baby Festas, Conceição dos Ouros, MG";
const GOOGLE_FORMS_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfURIhMWStX7lPmj9ggtQpodSK57LdgNhfme0ecV_2iIqvIyg/viewform?embedded=true";
const GOOGLE_FORMS_EXTERNAL_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfURIhMWStX7lPmj9ggtQpodSK57LdgNhfme0ecV_2iIqvIyg/viewform";

function optionalEnv(value: string | undefined, fallback: string) {
  return value?.trim() ? value : fallback;
}

export const EVENT = {
  debutanteFirstName: "Tairine",
  debutanteFullName: "Tairine Maria Pinto Rodrigues",
  birthDate: "2011-09-14",
  partyDateISO: process.env.NEXT_PUBLIC_EVENT_DATE ?? "2026-09-18T08:30:00-03:00",
  partyEndTime: "",
  venueName: "Salão Baby Festas",
  address: "",
  cityState: "Conceição dos Ouros - MG",
  locationQuery: EVENT_LOCATION_QUERY,
  parkingInfo: "",
  arrivalNotes: "",
  // Legado preservado apenas para componentes antigos fora da landing page pública.
  legacyDressCode: {
    title: "Dress Code",
    intro: "Escolha uma produção elegante e confortável para celebrar este momento especial conosco.",
    suggestion: "Traje esporte fino / social.",
    reservedColorsNote: "Os tons de azul-royal e prata são reservados para a produção da debutante.",
  },
  legacyRsvpDeadlineISO: "2026-11-20T23:59:59-03:00",
  maps: {
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT_LOCATION_QUERY)}`,
    wazeUrl: `https://waze.com/ul?q=${encodeURIComponent(EVENT_LOCATION_QUERY)}`,
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    defaultMessage: "Olá! Estou com uma dúvida sobre o aniversário da Tairine.",
  },
  // Legado preservado apenas para o componente antigo de presentes, que não é renderizado.
  legacyGifts: {
    mainMessage: "O maior presente é a sua presença. Mas se desejar nos presentear, deixamos algumas sugestões abaixo.",
    pixKey: "[CHAVE PIX A DEFINIR]",
    registryUrl: "",
  },
  rsvp: {
    internalFormEnabled: false,
    googleForms: {
      embedUrl: optionalEnv(process.env.NEXT_PUBLIC_RSVP_EMBED_URL, GOOGLE_FORMS_EMBED_URL),
      externalUrl: optionalEnv(process.env.NEXT_PUBLIC_RSVP_FORM_URL, GOOGLE_FORMS_EXTERNAL_URL),
    },
    googleFormsUrl: optionalEnv(process.env.NEXT_PUBLIC_RSVP_FORM_URL, GOOGLE_FORMS_EXTERNAL_URL),
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://convite-tairine.vercel.app",
} as const;

export const RSVP_LIMITS = {
  minSearchLength: 2,
  maxSearchResults: 5,
  searchRateLimitPerMinute: 10,
} as const;
