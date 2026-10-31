"use client";

import Link from "next/link";
import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { BrowserFrame, PhoneFrame } from "./frames";

const marketplacePhones = [
  {
    src: "/home/product/company.svg",
    alt: "FastTrack Logistics company profile with fees, ratings, and coverage",
    className:
      "absolute left-[6%] top-8 z-0 w-[158px] -rotate-[5deg] sm:left-[12%] sm:w-[176px]",
    float: "rideflow-float",
  },
  {
    src: "/home/product/rider.svg",
    alt: "Independent rider profile for Daniel Lukaku, available in Lagos",
    className:
      "absolute right-[6%] top-12 z-0 w-[158px] rotate-[5deg] sm:right-[12%] sm:w-[176px]",
    float: "rideflow-float-delayed",
  },
  {
    src: "/home/product/explore.svg",
    alt: "Rideflow marketplace explore screen comparing logistics companies",
    className:
      "absolute left-1/2 top-0 z-10 w-[196px] -translate-x-1/2 sm:w-[220px]",
    float: "",
  },
];

const views = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "The morning view of the whole operation.",
    description:
      "Income, expenses, active orders, and available drivers sit next to fleet status and documents that are about to expire.",
    src: "/home/product/dashboard.svg",
    alt: "Rideflow company dashboard with income, orders, fleet, and compliance alerts",
    device: "desktop" as const,
  },
  {
    id: "orders",
    label: "Orders",
    title: "Dispatch, without the WhatsApp chase.",
    description:
      "Every order shows pickup, drop-off, status, the assigned driver, and the fee. Assign, reassign, or mark delivered from the row.",
    src: "/home/product/orders.svg",
    alt: "Rideflow orders list with delivery status, assigned drivers, and fees",
    device: "desktop" as const,
  },
  {
    id: "fleet",
    label: "Fleet",
    title: "Every vehicle, with its paperwork attached.",
    description:
      "Cars, tricycles, and bikes in one register, with mileage, last service, and insurance dates that turn red before they lapse.",
    src: "/home/product/fleet.svg",
    alt: "Rideflow fleet register with vehicle status, drivers, and insurance expiry",
    device: "desktop" as const,
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Customers compare before they book.",
    description:
      "Compare verified companies and independent riders by fees, ratings and coverage, then book in a few taps.",
    src: "/home/product/explore.svg",
    alt: "Rideflow marketplace explore screen comparing logistics companies",
    device: "phones" as const,
  },
];

function MarketplaceStage() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[560px] sm:h-[540px]">
      {marketplacePhones.map((phone) => (
        <div key={phone.src} className={phone.className}>
          <div className={phone.float}>
            <PhoneFrame src={phone.src} alt={phone.alt} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ViewPanel({
  view,
}: {
  view: (typeof views)[number];
}) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-12">
      <div>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-rideflow-ink-hard md:text-3xl">
          {view.title}
        </h3>
        <p className="mt-3 max-w-md text-base leading-7 text-rideflow-text-light">
          {view.description}
        </p>
        {view.id === "marketplace" && (
          <Button
            asChild
            variant="outline"
            className="mt-6 cursor-pointer border-rideflow-blue px-6 py-2 font-semibold text-rideflow-blue hover:bg-white"
          >
            <Link href="/move">Learn more</Link>
          </Button>
        )}
      </div>
      <div className="min-w-0">
        {view.device === "phones" ? (
          <div className="overflow-hidden rounded-[28px] bg-white px-3 py-8 sm:px-6">
            <MarketplaceStage />
          </div>
        ) : (
          <BrowserFrame src={view.src} alt={view.alt} />
        )}
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const tabs = views.map((view) => ({
    title: view.label,
    value: view.id,
    content: <ViewPanel view={view} />,
  }));

  return (
    <section
      id="product"
      className="scroll-mt-28 border-y border-dashed border-[#808080] bg-body-gray py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <Badge text="The product" color="bg-white" />
        <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-rideflow-ink-hard sm:text-4xl md:text-[2.6rem]">
          The desk for the company. The app for the customer.
        </h2>

        <Tabs
          tabs={tabs}
          containerClassName="mt-8 flex-wrap gap-2"
          tabClassName="cursor-pointer bg-white text-sm font-semibold text-rideflow-text2 hover:bg-white/80"
          activeTabClassName="bg-rideflow-ink-hard"
          contentClassName="mt-6"
        />
      </div>
    </section>
  );
}
