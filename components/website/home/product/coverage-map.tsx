"use client";

import dynamic from "next/dynamic";
import Badge from "@/components/custom/badge";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[2/1] w-full rounded-lg bg-white" aria-hidden />
  ),
});

const LAGOS = { lat: 6.5244, lng: 3.3792, label: "Lagos" };

const routes = [
  { start: LAGOS, end: { lat: 5.6037, lng: -0.187, label: "Accra" } },
  { start: LAGOS, end: { lat: 14.7167, lng: -17.4677, label: "Dakar" } },
  { start: LAGOS, end: { lat: 30.0444, lng: 31.2357, label: "Cairo" } },
  { start: LAGOS, end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" } },
  { start: LAGOS, end: { lat: -26.2041, lng: 28.0473, label: "Johannesburg" } },
  { start: LAGOS, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
  { start: LAGOS, end: { lat: 25.2048, lng: 55.2708, label: "Dubai" } },
  { start: LAGOS, end: { lat: 40.7128, lng: -74.006, label: "New York" } },
  { start: LAGOS, end: { lat: 19.076, lng: 72.8777, label: "Mumbai" } },
  { start: LAGOS, end: { lat: -23.5505, lng: -46.6333, label: "São Paulo" } },
];

export function CoverageMap({ id = "coverage" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <Badge text="Beyond borders" color="bg-body-gray" />
        <div className="mt-4 max-w-2xl">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-rideflow-ink-hard sm:text-4xl">
            Into Nigeria. Out to the world.
          </h2>
          <p className="mt-3 text-sm leading-6 text-rideflow-text-light sm:text-base">
            Find partners who handle goods coming in and going out. Every job
            can start in Lagos — across Africa, and on to Europe, the Americas,
            the Middle East and Asia.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-rideflow-hairline bg-white">
          <WorldMap dots={routes} lineColor="#2844e8" />
        </div>
      </div>
    </section>
  );
}
