import { EVENT } from "@/constants/event";

function formatIcsDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function generateIcsContent(): string {
  const start = new Date(EVENT.partyDateISO);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Convite Tairine 15 Anos//PT-BR",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@convite-tairine`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:15 Anos de ${EVENT.debutanteFirstName}`,
    `LOCATION:${EVENT.locationQuery}`,
    `DESCRIPTION:Celebração dos 15 anos de ${EVENT.debutanteFullName}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcsFile() {
  const content = generateIcsContent();
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "15-anos-tairine.ics";
  link.click();
  URL.revokeObjectURL(url);
}
