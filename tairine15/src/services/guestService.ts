import { prisma } from "@/lib/prisma";
import { normalizeName } from "@/utils/normalizeName";
import { RSVP_LIMITS } from "@/constants/event";
import type { GuestDetailDTO, GuestSearchResult } from "@/types/guest";

export async function searchGuests(query: string): Promise<GuestSearchResult[]> {
  const normalized = normalizeName(query);
  if (normalized.length < RSVP_LIMITS.minSearchLength) return [];

  const guests = await prisma.guest.findMany({
    where: { isActive: true, normalizedName: { contains: normalized } },
    include: { group: true },
    take: RSVP_LIMITS.maxSearchResults,
    orderBy: { name: "asc" },
  });

  return guests.map((g: (typeof guests)[number]) => ({
    id: g.id,
    name: g.name,
    invitationCode: g.invitationCode,
    groupName: g.group?.name ?? null,
    maximumGuests: g.group?.maximumGuests ?? 1,
    allowsCompanion: g.group?.allowsCompanion ?? false,
  }));
}

export async function getGuestDetail(guestId: string): Promise<GuestDetailDTO | null> {
  const guest = await prisma.guest.findUnique({
    where: { id: guestId },
    include: { group: { include: { members: true } }, rsvp: true },
  });

  if (!guest || !guest.isActive) return null;

  return {
    id: guest.id,
    name: guest.name,
    invitationCode: guest.invitationCode,
    groupName: guest.group?.name ?? null,
    maximumGuests: guest.group?.maximumGuests ?? 1,
    allowsCompanion: guest.group?.allowsCompanion ?? false,
    members:
      guest.group?.members.map((m) => ({
        id: m.id,
        name: m.name,
        ageCategory: m.ageCategory,
        confirmed: m.confirmed,
      })) ?? [],
    rsvpStatus: guest.rsvp?.status ?? null,
  };
}

export async function getGuestByCode(code: string) {
  return prisma.guest.findUnique({
    where: { invitationCode: code },
    include: { group: { include: { members: true } }, rsvp: true },
  });
}
