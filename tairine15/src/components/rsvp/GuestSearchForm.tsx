"use client";
import { useState } from "react";
import { useGuestSearch } from "@/hooks/useGuestSearch";
import { UI_MESSAGES } from "@/constants/content";
import { RSVP_LIMITS } from "@/constants/event";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { GuestSearchResult } from "@/types/guest";

export function GuestSearchForm({ onSelectGuest }: { onSelectGuest: (guest: GuestSearchResult) => void }) {
  const [query, setQuery] = useState("");
  const { results, isLoading, error } = useGuestSearch(query);
  const showNoResults = !isLoading && query.trim().length >= RSVP_LIMITS.minSearchLength && results.length === 0 && !error;

  return (
    <div>
      <p className="mb-4 text-center text-sm text-white/70">{UI_MESSAGES.searchPrompt}</p>
      <Input label={UI_MESSAGES.searchInputLabel} placeholder={UI_MESSAGES.searchPlaceholder} value={query} onChange={(e) => setQuery(e.target.value)} autoComplete="name" />
      <div className="mt-4 space-y-3" aria-live="polite">
        {isLoading && <p className="text-center text-sm text-white/50">Buscando...</p>}
        {error && <p className="text-center text-sm text-red-300">{error}</p>}
        {showNoResults && <p className="text-center text-sm text-white/60">{UI_MESSAGES.searchNotFound}</p>}
        {results.map((guest) => (
          <Card key={guest.id} className="flex items-center justify-between gap-4 py-4">
            <div>
              <p className="text-white">{guest.name}</p>
              {guest.groupName && <p className="text-xs text-white/50">{guest.groupName}</p>}
            </div>
            <Button size="md" onClick={() => onSelectGuest(guest)}>{UI_MESSAGES.selectMyInvite}</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
