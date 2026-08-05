import { Metadata } from "next";
import { MovePage } from "./page.client";

export const metadata: Metadata = {
  title: "Stop Overpaying to Move Goods - Rideflow",
  description:
    "Compare every logistics provider, decide your price, and book the cheapest in minutes. Join the waitlist and get ₦1,000 off your first delivery.",
  openGraph: {
    title: "Stop Overpaying to Move Goods - Rideflow",
    description:
      "Compare every logistics provider, decide your price, and book the cheapest in minutes.",
    url: "https://rideflow.org/move",
    siteName: "Rideflow",
    type: "website",
  },
};

export default function Page() {
  return <MovePage />;
}
