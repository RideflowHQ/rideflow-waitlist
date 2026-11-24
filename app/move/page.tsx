import { Metadata } from "next";
import { MovePage } from "./page.client";

export const metadata: Metadata = {
  title: "Rideflow Hubs: Book a Dispatch Rider in Lagos | Compare Prices",
  description:
    "Need to send a package in Lagos? Compare verified courier companies and dispatch riders on Rideflow Hubs, check prices upfront, and track live.",
};

export default function Page() {
  return <MovePage />;
}
