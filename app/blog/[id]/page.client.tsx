"use client";

import { DetailHero, RelatedBlogs } from "@/components/website/blog";
import dynamic from "next/dynamic";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);

export function BlogsDetailPage() {
  return (
    <main className=" w-full  flex flex-col relative">
      <DetailHero />
      <RelatedBlogs />
      <BookingSection />
    </main>
  );
}
