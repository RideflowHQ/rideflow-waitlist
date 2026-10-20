"use client";
import { useEffect, useState, type ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  intervalMs = 5000,
  className,
  cardClassName,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  intervalMs?: number;
  className?: string;
  cardClassName?: string;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const next = [...prevCards];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  function cycle() {
    setCards((prevCards) => {
      const next = [...prevCards];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  }

  return (
    <div
      className={cn(
        !className && "h-60 w-60 md:h-60 md:w-96",
        "relative",
        className,
      )}
      onClick={cycle}
    >
      {cards.map((card, index) => {
        const showMeta = Boolean(card.name || card.designation);

        return (
          <motion.div
            key={card.id}
            className={cn(
              !cardClassName &&
                "h-60 w-60 rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/[0.1] md:h-60 md:w-96 dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05]",
              "absolute flex flex-col justify-between",
              cardClassName,
            )}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div
              className={cn(
                "font-normal text-neutral-700 dark:text-neutral-200",
                !showMeta && "h-full",
              )}
            >
              {card.content}
            </div>
            {showMeta && (
              <div>
                <p className="font-medium text-neutral-500 dark:text-white">
                  {card.name}
                </p>
                <p className="font-normal text-neutral-400 dark:text-neutral-200">
                  {card.designation}
                </p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
