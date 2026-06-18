"use client";

import Badge from "@/components/custom/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePlatformStats } from "@/hooks/use-platform-stats";
import {
  PLATFORM_STAT_LABELS,
  resolvePlatformDisplayStats,
} from "@/lib/stats-adapter";
import { CALENDLY_URL } from "@/lib/content/site";

function formatStatValue(
  value: number,
  format?: "currency",
  currency = "NGN",
): string {
  if (format === "currency") {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  }

  return value.toLocaleString("en-NG");
}

function formatLastUpdated(date: Date | null) {
  if (!date) return null;

  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.max(1, Math.floor(diffMs / 60000));

  if (diffMinutes < 60) {
    return `Updated ${diffMinutes}m ago`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  return `Updated ${diffHours}h ago`;
}

export const VisionSection = () => {
  return (
    <section className="py-12 md:py-18 bg-body-gray border-y border-dashed border-[#808080]">
      <div className="container mx-auto px-6 max-w-4xl">
        <Badge text="Where We're Going" color="bg-white" />
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="mt-4 text-2xl sm:text-3xl md:text-[2.6rem] font-medium leading-tight"
        >
          One Platform. Every Logistics Business in Nigeria.
        </TextAnimate>
        <p className="mt-4 text-base md:text-lg text-rideflow-text leading-7">
          The immediate mission is clear: give every logistics operator in
          Nigeria, from a 5-rider courier startup to a 200-vehicle freight
          company, the tools to run a professional, scalable operation.
        </p>
        <p className="mt-4 text-base md:text-lg text-rideflow-text leading-7">
          The longer vision is bigger. Rideflow is building the marketplace layer
          that connects these businesses to the customers who need them. A
          discovery platform where anyone searching for logistics services in
          their area finds the right provider, instantly.
        </p>
        <p className="mt-4 font-medium text-rideflow-text">
          Operations infrastructure today. The connective tissue of Nigerian
          logistics tomorrow.
        </p>
      </div>
    </section>
  );
};

export const AboutStatsSection = () => {
  const { stats, isLoading, error, lastUpdated, hasLoadedOnce } =
    usePlatformStats();
  const displayStats = resolvePlatformDisplayStats(stats);
  const updatedLabel = formatLastUpdated(lastUpdated);

  const statsToShow = [
    {
      label: PLATFORM_STAT_LABELS.ordersProcessed,
      value: displayStats.ordersProcessed,
    },
    {
      label: PLATFORM_STAT_LABELS.deliveriesCompleted,
      value: displayStats.deliveriesCompleted,
    },
    {
      label: PLATFORM_STAT_LABELS.customersServed,
      value: displayStats.customersServed,
    },
    {
      label: PLATFORM_STAT_LABELS.deliveryFeesTracked,
      value: displayStats.deliveryFeesTracked,
      format: "currency" as const,
      currency: displayStats.currency,
    },
  ];

  return (
    <section className="py-12 md:py-18 bg-white">
      <div className="container mx-auto px-6">
        <Badge text="Rideflow by the Numbers" color="bg-body-gray" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statsToShow.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] bg-body-gray p-6 md:p-8"
            >
              {isLoading ? (
                <div className="h-8 md:h-9 w-32 animate-pulse rounded bg-rideflow-text/10" />
              ) : (
                <p className="text-2xl md:text-3xl font-semibold text-rideflow-text">
                  {formatStatValue(
                    stat.value,
                    "format" in stat ? stat.format : undefined,
                    "currency" in stat ? stat.currency : undefined,
                  )}
                </p>
              )}
              <p className="mt-2 text-sm text-rideflow-text-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {updatedLabel && !isLoading && (
          <p className="mt-4 text-xs text-rideflow-text-light">{updatedLabel}</p>
        )}

        {error && !isLoading && (
          <p className="mt-2 text-xs text-rideflow-text-light">
            {hasLoadedOnce
              ? "Live stats are temporarily unavailable. Showing the last available figures."
              : "Live stats are temporarily unavailable."}
          </p>
        )}
      </div>
    </section>
  );
};

export const AboutClosingSection = () => {
  return (
    <section className="py-12 md:py-18 bg-body-gray">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
        >
          Want to See What Rideflow Can Do for Your Operation?
        </TextAnimate>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="bg-rideflow-blue text-white hover:bg-blue-700"
            onClick={() => window.open(CALENDLY_URL, "_blank")}
          >
            Book a Demo →
          </Button>
          <Button asChild variant="outline" className="border-rideflow-blue text-rideflow-blue">
            <Link href="/platform">View the Platform →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
