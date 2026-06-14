"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import { usePlatformStats } from "@/hooks/use-platform-stats";
import { motion } from "motion/react";
import { StatItem } from "./stat-item";

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

const rowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

function StatDivider() {
  return (
    <motion.div
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-px w-full origin-left bg-white/10"
    />
  );
}

export const PlatformStatsSection = () => {
  const { stats, isLoading, error, lastUpdated, hasLoadedOnce } =
    usePlatformStats();
  const updatedLabel = formatLastUpdated(lastUpdated);

  return (
    <section className="bg-[#04081A] text-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          {/* Left column — narrative */}
          <div className="w-full lg:w-[38%] flex flex-col gap-6 md:gap-8">
            <TextAnimate
              animation="blurIn"
              by="word"
              startOnView
              once
              className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] leading-[1.15] text-white text-left"
            >
              Trusted by teams running logistics for real
            </TextAnimate>

            <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed text-white/70">
              <p>
                Rideflow is not a wait-and-see product. Logistics businesses
                already process orders, manage fleets, and complete deliveries
                on our platform every single day.
              </p>
              <p>
                The numbers you see are live and proof that teams chose us, they found
                value, and keep building their operations on Rideflow because it
                works when their business depends on it.
              </p>
            </div>

            {updatedLabel && !isLoading && (
              <p className="text-xs text-white/40">{updatedLabel}</p>
            )}
          </div>

          {/* Right column — open stats grid */}
          <motion.div
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full lg:w-[62%] flex flex-col"
          >
            <StatItem
              label="Total orders processed"
              sublabel="Across all active vendors on the platform"
              value={stats?.totalOrdersProcessed ?? 0}
              isLoading={isLoading}
              size="hero"
            />

            <StatDivider />

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-white/10">
              <StatItem
                label="Delivered amount"
                sublabel="Total value of completed deliveries"
                value={stats?.deliveredAmount ?? 0}
                format="currency"
                currency={stats?.currency ?? "NGN"}
                isLoading={isLoading}
                className="sm:pr-8"
              />
              <StatItem
                label="Active businesses"
                sublabel="Businesses using Rideflow"
                value={stats?.activeVendors ?? 0}
                isLoading={isLoading}
                className="sm:pl-8"
              />
            </div>

            <StatDivider />

            <StatItem
              label="Fleet in use"
              sublabel="Vehicles actively assigned to deliveries"
              value={stats?.fleetInUse ?? 0}
              isLoading={isLoading}
            />

            {error && !isLoading && (
              <p className="pt-4 text-xs text-white/40">
                {hasLoadedOnce
                  ? "Live stats are temporarily unavailable. Showing the last available figures."
                  : "Live stats are temporarily unavailable."}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
