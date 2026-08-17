"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { LoadingScreen } from "@/components/invitation/LoadingScreen";
import { InvitationGate } from "@/components/invitation/InvitationGate";
import { StarfieldBackground } from "@/components/animations/StarfieldBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PersonalitySection } from "@/components/sections/PersonalitySection";
import { NameMeaningSection } from "@/components/sections/NameMeaningSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";
import { FavoriteColorsSection } from "@/components/sections/FavoriteColorsSection";
import { PartyColorsSection } from "@/components/sections/PartyColorsSection";
import { BookSection } from "@/components/sections/BookSection";
import { DreamsSection } from "@/components/sections/DreamsSection";
import { PhotoCarouselSection } from "@/components/sections/PhotoCarouselSection";
import { GratitudeSection } from "@/components/sections/GratitudeSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { EventInfoSection } from "@/components/sections/EventInfoSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { RsvpCallToActionSection } from "@/components/sections/RsvpCallToActionSection";

type Stage = "loading" | "gate" | "invitation";

export default function Home() {
  const [stage, setStage] = useState<Stage>("loading");

  useEffect(() => {
    const timeout = setTimeout(() => setStage("gate"), 2200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <StarfieldBackground />
      <AnimatePresence mode="wait">
        {stage === "loading" && <LoadingScreen key="loading" />}
        {stage === "gate" && <InvitationGate key="gate" onOpen={() => setStage("invitation")} />}
      </AnimatePresence>
      {stage === "invitation" && (
        <>
          <Header />
          <main>
            <HeroSection />
            <CountdownSection />
            <AboutSection />
            <PersonalitySection />
            <NameMeaningSection />
            <InterestsSection />
            <HobbiesSection />
            <FavoriteColorsSection />
            <PartyColorsSection />
            <BookSection />
            <DreamsSection />
            <PhotoCarouselSection />
            <GratitudeSection />
            <EventInfoSection />
            <LocationSection />
            <RsvpCallToActionSection />
            <ClosingSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
