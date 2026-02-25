"use client";

import {
  AboutHero,
  Brands,
  FoundersNoteSection,
  ValueSection,
  WhoWeAreSection,
} from "@/components/website/about";
import TeamMembersSection from "@/components/website/about/team-members";
import dynamic from "next/dynamic";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);

export function AboutPage() {
  return (
    <main className=" w-full  flex flex-col relative">
      <AboutHero />
      <WhoWeAreSection />
      <FoundersNoteSection />
      <ValueSection />
      <TeamMembersSection />
      <Brands />
      <BookingSection />
    </main>
  );
}
