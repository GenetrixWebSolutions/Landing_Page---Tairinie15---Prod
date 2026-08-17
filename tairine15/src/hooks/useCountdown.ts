"use client";
import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number; hours: number; minutes: number; seconds: number; isPast: boolean;
}

function calculate(targetIso: string): CountdownValue {
  const diff = new Date(targetIso).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  };
}

export function useCountdown(targetIso: string): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(() => calculate(targetIso));
  useEffect(() => {
    const interval = setInterval(() => setValue(calculate(targetIso)), 1000);
    return () => clearInterval(interval);
  }, [targetIso]);
  return value;
}
