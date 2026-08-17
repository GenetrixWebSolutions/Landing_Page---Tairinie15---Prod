"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { rsvpSchema, type RsvpInput } from "@/lib/validations";
import { UI_MESSAGES } from "@/constants/content";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { GuestDetailDTO } from "@/types/guest";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function RsvpForm({ guest }: { guest: GuestDetailDTO }) {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guestId: guest.id, invitationCode: guest.invitationCode,
      attending: true, confirmedCount: 1, selectedMemberIds: [],
    },
  });

  async function onSubmit(data: RsvpInput) {
    if (attending === null) return;
    setSubmitState("submitting"); setServerError(null);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, attending }),
      });
      const result = await response.json();
      if (!response.ok) { setServerError(result.error ?? UI_MESSAGES.rsvpError); setSubmitState("error"); return; }
      setSubmitState("success");
    } catch { setServerError(UI_MESSAGES.rsvpError); setSubmitState("error"); }
  }

  if (submitState === "success") {
    return (
      <Card className="text-center">
        <p className="font-serif text-xl text-white">{attending ? UI_MESSAGES.rsvpSuccessYes : UI_MESSAGES.rsvpSuccessNo}</p>
      </Card>
    );
  }

  return (
    <Card>
      <p className="mb-6 text-center text-sm text-white/70">{UI_MESSAGES.rsvpPrompt}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <input type="hidden" {...register("guestId")} />
        <input type="hidden" {...register("invitationCode")} />
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-[var(--color-silver)]">{UI_MESSAGES.attendingLegend}</legend>
          <div className="flex gap-3">
            <Button type="button" variant={attending === true ? "primary" : "secondary"} onClick={() => setAttending(true)}>{UI_MESSAGES.attendingYes}</Button>
            <Button type="button" variant={attending === false ? "primary" : "secondary"} onClick={() => setAttending(false)}>{UI_MESSAGES.attendingNo}</Button>
          </div>
        </fieldset>
        {attending && (
          <>
            <Input label={UI_MESSAGES.confirmedCountLabel(guest.maximumGuests)} type="number" min={1} max={guest.maximumGuests} defaultValue={1} error={errors.confirmedCount?.message} {...register("confirmedCount", { valueAsNumber: true })} />
            {guest.allowsCompanion && (<Input label={UI_MESSAGES.companionLabel} error={errors.companionName?.message} {...register("companionName")} />)}
            <Input label={UI_MESSAGES.phoneLabel} type="tel" error={errors.phone?.message} {...register("phone")} />
            <Textarea label={UI_MESSAGES.dietaryRestrictionsLabel} error={errors.dietaryRestrictions?.message} {...register("dietaryRestrictions")} />
          </>
        )}
        <Textarea label={UI_MESSAGES.messageLabel} error={errors.message?.message} {...register("message")} />
        {serverError && <p role="alert" className="text-sm text-red-300">{serverError}</p>}
        <p className="text-xs text-white/40">{UI_MESSAGES.privacyNotice}</p>
        <Button type="submit" size="lg" className="w-full" disabled={attending === null || submitState === "submitting"}>
          {submitState === "submitting" ? UI_MESSAGES.submitSending : UI_MESSAGES.submitConfirmation}
        </Button>
      </form>
    </Card>
  );
}
