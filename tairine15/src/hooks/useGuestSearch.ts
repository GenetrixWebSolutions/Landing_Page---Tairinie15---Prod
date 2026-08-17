"use client";
import { useEffect, useState } from "react";
import type { GuestSearchResult } from "@/types/guest";
import { RSVP_LIMITS } from "@/constants/event";

interface UseGuestSearchReturn {
  results: GuestSearchResult[]; isLoading: boolean; error: string | null;
}

export function useGuestSearch(query: string): UseGuestSearchReturn {
  const [results, setResults] = useState<GuestSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < RSVP_LIMITS.minSearchLength) {
      setResults([]); setError(null); return;
    }
    const timeout = setTimeout(async () => {
      setIsLoading(true); setError(null);
      try {
        const response = await fetch(`/api/guests/search?query=${encodeURIComponent(trimmed)}`);
        const data = await response.json();
        if (!response.ok) { setError(data.error ?? "Não foi possível buscar agora."); setResults([]); }
        else { setResults(data.results); }
      } catch { setError("Não foi possível buscar agora. Verifique sua conexão."); }
      finally { setIsLoading(false); }
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  return { results, isLoading, error };
}
