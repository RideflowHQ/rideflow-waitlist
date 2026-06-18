"use client";

import {
  AboutHero,
  FoundersNoteSection,
  ValueSection,
  WhoWeAreSection,
} from "@/components/website/about";
import {
  AboutClosingSection,
  AboutStatsSection,
  VisionSection,
} from "@/components/website/about/vision";
import TeamMembersSection from "@/components/website/about/team-members";

export function AboutPage() {
  return (
    <main className=" w-full  flex flex-col relative">
      <AboutHero />
      <WhoWeAreSection />
      <FoundersNoteSection />
      <VisionSection />
      <AboutStatsSection />
      <TeamMembersSection />
      <ValueSection />
      <AboutClosingSection />
    </main>
  );
}
