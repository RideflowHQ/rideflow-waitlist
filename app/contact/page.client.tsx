"use client";

import { ContactHero, ContactForm } from "@/components/website/contact";
import dynamic from "next/dynamic";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);

export function ContactPage() {
  return (
    <main className=" w-full  flex flex-col relative">
      <ContactHero />
      <ContactForm />
      <BookingSection />
    </main>
  );
}
