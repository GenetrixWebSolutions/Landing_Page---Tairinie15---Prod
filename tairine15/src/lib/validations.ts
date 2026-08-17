import { z } from "zod";

export const guestSearchSchema = z.object({
  query: z.string().trim().min(2, "Digite pelo menos 2 letras para buscar."),
});

export const rsvpSchema = z
  .object({
    guestId: z.string().min(1, "Convidado inválido."),
    invitationCode: z.string().min(1, "Código do convite inválido."),
    attending: z.boolean(),
    confirmedCount: z.number().int().min(0).max(20),
    selectedMemberIds: z.array(z.string()).default([]),
    companionName: z.string().trim().max(120).optional().or(z.literal("")),
    phone: z.string().trim().max(20).optional().or(z.literal("")),
    dietaryRestrictions: z.string().trim().max(300).optional().or(z.literal("")),
    notes: z.string().trim().max(500).optional().or(z.literal("")),
    message: z.string().trim().max(500).optional().or(z.literal("")),
  })
  .refine((data) => !data.attending || data.confirmedCount >= 1, {
    message: "Informe ao menos 1 pessoa confirmada.",
    path: ["confirmedCount"],
  });

export type RsvpInput = z.infer<typeof rsvpSchema>;
export type GuestSearchInput = z.infer<typeof guestSearchSchema>;
