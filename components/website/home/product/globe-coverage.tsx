"use client";

import dynamic from "next/dynamic";
import Badge from "@/components/custom/badge";
import type { GlobeConfig } from "@/components/ui/globe";

const World = dynamic(
  () => import("@/components/ui/globe").then((mod) => mod.World),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-rideflow-ink-hard" aria-hidden />
    ),
  },
);

const BLUE = "#2844e8";
const SIGNAL = "#f35d2b";
const LAGOS = { lat: 6.5244, lng: 3.3792 };
const NIGERIA = { lat: 9.082, lng: 8.675 };

const arcs = [
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: 5.6037, endLng: -0.187, arcAlt: 0.12, order: 1, color: BLUE },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: 14.7167, endLng: -17.4677, arcAlt: 0.2, order: 1, color: SIGNAL },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: 30.0444, endLng: 31.2357, arcAlt: 0.22, order: 2, color: BLUE },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: -1.2921, endLng: 36.8219, arcAlt: 0.18, order: 2, color: SIGNAL },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: -26.2041, endLng: 28.0473, arcAlt: 0.28, order: 3, color: BLUE },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.35, order: 3, color: SIGNAL },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.3, order: 4, color: BLUE },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: 40.7128, endLng: -74.006, arcAlt: 0.45, order: 4, color: SIGNAL },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: 19.076, endLng: 72.8777, arcAlt: 0.38, order: 5, color: BLUE },
  { startLat: LAGOS.lat, startLng: LAGOS.lng, endLat: -23.5505, endLng: -46.6333, arcAlt: 0.42, order: 5, color: SIGNAL },
];

const globeConfig: GlobeConfig = {
  globeColor: "#0e0e0e",
  showAtmosphere: false,
  atmosphereColor: "#000000",
  atmosphereAltitude: 0,
  polygonColor: "rgba(255,255,255,0.82)",
  emissive: "#0e0e0e",
  emissiveIntensity: 0.55,
  shininess: 0.2,
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: BLUE,
  arcTime: 2200,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: NIGERIA,
  autoRotate: true,
  autoRotateSpeed: 0.35,
};

export function GlobeCoverage({ id = "coverage" }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative scroll-mt-28 overflow-hidden bg-rideflow-ink-hard"
    >
      <div className="container relative z-10 mx-auto px-6 pb-4 pt-14 md:py-24">
        <div className="max-w-xl lg:min-h-[32rem]">
          <Badge
            text="Beyond borders"
            color="border border-[#3A3A3A] bg-transparent text-white"
          />
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
            Into Nigeria. Out to the world.
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-[#B8BBC4]">
            Logistics businesses on Rideflow can manage international
            shipments with their preferred carrier, all from the same
            dashboard. Every route can start in Lagos.
          </p>
        </div>
      </div>

      <div className="pointer-events-none relative h-[20rem] overflow-hidden sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%] lg:overflow-visible">
        <div className="absolute inset-y-0 -right-[20%] left-0 lg:inset-auto lg:-bottom-[12%] lg:-right-[8%] lg:left-auto lg:top-auto lg:h-[118%] lg:w-[118%]">
          <World globeConfig={globeConfig} data={arcs} />
        </div>
      </div>
    </section>
  );
}
