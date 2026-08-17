import { prisma } from "@/lib/prisma";
import type { RsvpInput } from "@/lib/validations";

export class RsvpBusinessError extends Error {}

export async function upsertRsvp(input: RsvpInput) {
  const guest = await prisma.guest.findUnique({
    where: { id: input.guestId },
    include: { group: true },
  });

  if (!guest || !guest.isActive) {
    throw new RsvpBusinessError("Convite não encontrado ou inativo.");
  }
  if (guest.invitationCode !== input.invitationCode) {
    throw new RsvpBusinessError("Código do convite não confere.");
  }

  const maxGuests = guest.group?.maximumGuests ?? 1;
  const allowsCompanion = guest.group?.allowsCompanion ?? false;

  if (input.attending && input.confirmedCount > maxGuests) {
    throw new RsvpBusinessError(`Este convite permite confirmar no máximo ${maxGuests} pessoa(s).`);
  }
  if (input.companionName && !allowsCompanion) {
    throw new RsvpBusinessError("Este convite não autoriza acompanhantes.");
  }

  const rsvp = await prisma.rSVP.upsert({
    where: { guestId: guest.id },
    create: {
      guestId: guest.id,
      status: input.attending ? "CONFIRMED" : "DECLINED",
      confirmedCount: input.attending ? input.confirmedCount : 0,
      phone: input.phone || null,
      dietaryRestrictions: input.dietaryRestrictions || null,
      message: input.message || null,
      notes: input.notes || null,
      respondedAt: new Date(),
    },
    update: {
      status: input.attending ? "CONFIRMED" : "DECLINED",
      confirmedCount: input.attending ? input.confirmedCount : 0,
      phone: input.phone || null,
      dietaryRestrictions: input.dietaryRestrictions || null,
      message: input.message || null,
      notes: input.notes || null,
      respondedAt: new Date(),
    },
  });

  if (input.selectedMemberIds.length > 0) {
    await prisma.groupMember.updateMany({
      where: { id: { in: input.selectedMemberIds }, groupId: guest.groupId ?? undefined },
      data: { confirmed: input.attending },
    });
  }

  return rsvp;
}

export async function getRsvpSummary() {
  const [total, confirmed, declined, pending, rsvps] = await Promise.all([
    prisma.guest.count({ where: { isActive: true } }),
    prisma.rSVP.count({ where: { status: "CONFIRMED" } }),
    prisma.rSVP.count({ where: { status: "DECLINED" } }),
    prisma.guest.count({ where: { isActive: true, rsvp: null } }),
    prisma.rSVP.findMany({ where: { status: "CONFIRMED" } }),
  ]);

  const totalPeople = rsvps.reduce(
    (sum: number, r: (typeof rsvps)[number]) => sum + r.confirmedCount,
    0
  );
  const dietaryCount = rsvps.filter(
    (r: (typeof rsvps)[number]) => !!r.dietaryRestrictions
  ).length;

  return {
    totalInvites: total,
    confirmed,
    declined,
    pending,
    totalPeopleConfirmed: totalPeople,
    dietaryRestrictionsCount: dietaryCount,
  };
}
