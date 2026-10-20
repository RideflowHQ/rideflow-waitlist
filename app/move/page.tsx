import { Metadata } from "next";
import { MovePage } from "./page.client";

export const metadata: Metadata = {
  title: "Find, compare and book verified logistics partners - Rideflow",
  description:
    "Rideflow Hubs launches 11.11.2026. Find, compare and book verified logistics partners across Nigeria, and track every delivery live.",
  openGraph: {
    title: "Find, compare and book verified logistics partners - Rideflow",
    description:
      "Rideflow Hubs launches 11.11.2026. Find, compare and book verified logistics partners across Nigeria.",
    url: "https://rideflow.org/move",
    siteName: "Rideflow",
    type: "website",
  },
};

export default function Page() {
  return <MovePage />;
}
