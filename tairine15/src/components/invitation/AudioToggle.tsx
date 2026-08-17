"use client";
import { useRef, useState } from "react";
import { INVITATION_CONTENT, MEDIA_CONTENT } from "@/constants/content";

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); }
    else { audio.play().catch(() => {}); }
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <audio ref={audioRef} src={MEDIA_CONTENT.audio.ambientSrc} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? INVITATION_CONTENT.audioOnLabel : INVITATION_CONTENT.audioOffLabel}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-silver)] sm:bottom-6 sm:right-6"
      >
        <span className="sr-only">{isPlaying ? INVITATION_CONTENT.audioOnStatus : INVITATION_CONTENT.audioOffStatus}</span>
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6v12M15 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 5v14l11-7L8 5z" fill="white" />
          </svg>
        )}
      </button>
    </>
  );
}
