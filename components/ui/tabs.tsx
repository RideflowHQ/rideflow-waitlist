"use client";

import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const next = [...propTabs];
    const selected = next.splice(idx, 1);
    next.unshift(selected[0]);
    setTabs(next);
    setActive(next[0]);
  };

  return (
    <>
      <div
        className={cn(
          "relative flex w-full max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible",
          containerClassName,
        )}
        role="tablist"
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={active.value === tab.value}
            onClick={() => moveSelectedTabToTop(idx)}
            className={cn("relative rounded-full px-4 py-2", tabClassName)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="product-tab-pill"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800",
                  activeTabClassName,
                )}
              />
            )}
            <span
              className={cn(
                "relative block text-black dark:text-white",
                active.value === tab.value && "text-white",
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        className={cn("mt-8", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  const current = tabs[0];

  return (
    <div className={cn("relative w-full", className)}>
      <motion.div
        key={current.value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {current.content}
      </motion.div>
    </div>
  );
};
