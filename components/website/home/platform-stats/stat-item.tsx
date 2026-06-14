"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useAnimatedNumber } from "@/hooks/use-animated-number";
import { cn } from "@/lib/utils";

type StatItemProps = {
  label: string;
  sublabel?: string;
  value: number;
  format?: "number" | "currency";
  currency?: string;
  isLoading?: boolean;
  size?: "hero" | "default";
  className?: string;
};

function formatStatValue(
  value: number,
  format: "number" | "currency",
  currency: string,
) {
  if (format === "currency") {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  }

  return value.toLocaleString("en-NG");
}

export function StatItem({
  label,
  sublabel,
  value,
  format = "number",
  currency = "NGN",
  isLoading = false,
  size = "default",
  className,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const animatedValue = useAnimatedNumber(value, {
    enabled: isInView && !isLoading,
  });
  const formattedValue = formatStatValue(animatedValue, format, currency);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={cn("group flex flex-col gap-2 py-8 md:py-10", className)}
    >
      {isLoading ? (
        <div
          className={cn(
            "animate-pulse rounded bg-white/10",
            size === "hero" ? "h-14 md:h-20 w-48 md:w-64" : "h-10 md:h-14 w-36 md:w-48",
          )}
        />
      ) : (
        <motion.span
          key={formattedValue}
          initial={{ opacity: 0.6, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "font-medium leading-none text-rideflow-blue transition-[text-shadow] duration-300 group-hover:[text-shadow:0_0_24px_rgba(44,75,253,0.45)]",
            size === "hero"
              ? "text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              : "text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem]",
          )}
        >
          {formattedValue}
        </motion.span>
      )}

      <div className="flex flex-col gap-1">
        <p className="text-sm md:text-base font-medium text-white">{label}</p>
        {sublabel && (
          <p className="text-xs md:text-sm text-white/50">{sublabel}</p>
        )}
      </div>
    </motion.div>
  );
}
