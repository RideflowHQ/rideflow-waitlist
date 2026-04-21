"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PricingPlan = {
  name: string;
  audience: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  ctaNewTab?: boolean;
  highlighted?: boolean;
  popularLabel?: string;
};

type PricingCardProps = {
  plan: PricingPlan;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
} as const;

function FeatureListCheck() {
  return (
    <span
      className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#E8ECFF] text-[#3353F6]"
      aria-hidden
    >
      <Check className="size-3" strokeWidth={2.5} />
    </span>
  );
}

export function PricingCard({ plan }: PricingCardProps) {
  const handleClick = () => {
    if (plan.ctaNewTab) {
      window.open(plan.ctaHref, "_blank");
      return;
    }

    window.location.href = plan.ctaHref;
  };

  if (plan.highlighted) {
    return (
      <motion.article
        variants={cardVariants}
        className="relative lg:-mx-1"
      >
        <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
          <div className="inline-flex min-w-40 items-center justify-center gap-1.5 rounded-full bg-[#E88300] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#442600] shadow-[0_16px_30px_rgba(232,131,0,0.28)]">
            <Image
              src="/pricing/sparkles.svg"
              alt="popular"
              width={16}
              height={16}
            />
            {plan.popularLabel ?? "Most Popular"}
          </div>
        </div>

        <div className="rounded-[28px]  bg-linear-to-b from-[#3A59FF] via-[#2B49EE] to-[#1F39D7] pt-10 pb-1 pr-1 pl-1 shadow-[0_30px_65px_rgba(40,68,232,0.18)]">
          <div className="flex min-h-164 flex-col rounded-[25px] bg-white">
            <div className="rounded-t-[25px] bg-white px-5 pb-5 pt-6 sm:px-6">
              <div className="inline-flex rounded-full bg-[#EEF2FF] px-3 py-1 text-[10px] font-semibold text-rideflow-blue">
                {plan.audience}
              </div>

              <h2 className="mt-4 text-[1.55rem] font-bold tracking-tight text-rideflow-text sm:text-[1.7rem]">
                {plan.name}
              </h2>

              <div className="mt-2 flex items-end gap-1">
                <p className="text-[2rem] font-bold leading-none tracking-tight text-rideflow-text sm:text-[2.2rem]">
                  {plan.price}
                </p>
                <span className="pb-0.5 text-[11px] font-medium text-rideflow-text-light">
                  {plan.cadence}
                </span>
              </div>

              <p className="mt-3 border-b border-dashed border-[#D9DEF0] pb-5 text-[11px] leading-5 text-rideflow-text-light">
                {plan.description}
              </p>

              <ul className="mt-5 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[11px] leading-5 text-rideflow-text-light"
                  >
                    <FeatureListCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto rounded-b-[25px] px-4 pb-4 pt-3">
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                <Button
                  className="group relative h-10 w-full overflow-hidden rounded-[10px] bg-linear-to-b from-[#3353F6] to-[#1E39D6] text-[12px] font-semibold text-white shadow-none hover:from-[#3D5CFF] hover:to-[#2240E0]"
                  onClick={handleClick}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/30 blur-md transition-transform duration-700 ease-out group-hover:translate-x-104"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_65%)] opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {plan.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="size-4" />
                    </span>
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={cardVariants}
      className="rounded-[24px] border border-[#E5E9F5] bg-white p-5 shadow-[0_10px_25px_rgba(15,23,42,0.04)] sm:p-6"
    >
      <div className="flex min-h-152 flex-col">
        <div className="inline-flex rounded-full bg-[#EEF2FF] px-3 py-1 text-[10px] font-semibold text-rideflow-blue w-fit">
          {plan.audience}
        </div>

        <h2 className="mt-4 text-[1.45rem] font-bold tracking-tight text-rideflow-text sm:text-[1.6rem]">
          {plan.name}
        </h2>

        <div className="mt-2 flex items-end gap-1">
          <p className="text-[1.85rem] font-bold leading-none tracking-tight text-rideflow-text sm:text-[2rem]">
            {plan.price}
          </p>
          <span className="pb-0.5 text-[11px] font-medium text-rideflow-text-light">
            {plan.cadence}
          </span>
        </div>

        <p className="mt-3 border-b border-dashed border-[#D9DEF0] pb-5 text-[11px] leading-5 text-rideflow-text-light">
          {plan.description}
        </p>

        <ul className="mt-5 flex flex-1 flex-col gap-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-[11px] leading-5 text-rideflow-text-light"
            >
              <FeatureListCheck />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.div
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
        >
          <Button
            className={cn(
              "group relative mt-7 h-10 w-full overflow-hidden rounded-[10px] border border-rideflow-blue bg-[rgba(40,68,232,0.06)] text-[12px] font-semibold text-rideflow-blue shadow-none hover:bg-[rgba(40,68,232,0.1)]",
            )}
            onClick={handleClick}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-rideflow-blue/15 blur-md transition-transform duration-700 ease-out group-hover:translate-x-104"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-transparent via-rideflow-blue/8 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
            />
            <span className="relative z-10 flex items-center gap-2">
              {plan.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-4" />
              </span>
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}
