"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL, REGISTER_URL } from "@/lib/content/site";
import { StoreBadges } from "@/components/website/shared/store-badges";
import { ProductStage } from "../product/stage";
// Waitlist paused — apps and dashboard are live.
// import { ClaimSlotHero } from "../claim-slot";

export const Hero = () => {
  return (
    <section className="min-h-screen relative">
      <Image
        src="/home/home-curve.svg"
        alt="curve"
        height={210}
        width={210}
        className="absolute top-0 left-0 -z-5 hidden md:block"
      />
      <div className="container mx-auto flex h-full flex-col items-center gap-10 px-6 pb-16 pt-30 lg:flex-row lg:items-start lg:gap-12 lg:py-24">
        <div className="flex h-full w-full flex-col items-start justify-center gap-5 md:gap-7 lg:w-[47%]">
          <div>
            <h1 className="text-[clamp(3.25rem,7.2vw,6.5rem)] leading-[0.86] text-rideflow-ink-hard">
              <span className="block font-black tracking-[-0.05em]">
                Streamline
              </span>
              <span className="block font-semibold tracking-[-0.045em] text-rideflow-text2">
                Your Logistics Operations.
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-rideflow-text-light sm:text-lg md:mt-4">
              Logistics companies run team, fleet, dispatch, and compliance on
              the Rideflow dashboard. Customers find verified partners and book
              deliveries on Hubs — one platform, two sides of the job.
            </p>
          </div>
          {/* <ClaimSlotHero /> */}
          <div className="mt-1 w-full md:mt-2">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-rideflow-text-extralight">
              For logistics businesses
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                className="cursor-pointer bg-rideflow-blue px-6 py-2 font-semibold text-white hover:bg-blue-700"
                onClick={() => window.open(REGISTER_URL, "_blank")}
              >
                Start for free
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer border-rideflow-blue px-6 py-2 font-semibold text-rideflow-blue hover:bg-body-gray"
                onClick={() => window.open(CALENDLY_URL, "_blank")}
              >
                Book a Demo
              </Button>
            </div>
            <p className="mb-2 mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-rideflow-text-extralight">
              For customers on hubs
            </p>
            <div>
              <StoreBadges
                tone="light"
                className="w-full max-w-[35rem] flex-nowrap [&>a]:min-w-0 [&>a]:flex-1"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[53%]">
          <ProductStage />
        </div>
      </div>
    </section>
  );
};
