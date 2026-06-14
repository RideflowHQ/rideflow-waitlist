"use client";

import { useEffect, useRef, useState } from "react";

type UseAnimatedNumberOptions = {
  duration?: number;
  enabled?: boolean;
};

export function useAnimatedNumber(
  value: number,
  { duration = 1500, enabled = true }: UseAnimatedNumberOptions = {},
) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValueRef = useRef(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const from = hasStartedRef.current ? previousValueRef.current : 0;
    const to = value;

    if (from === to && hasStartedRef.current) {
      return;
    }

    let startTime: number | undefined;
    let requestId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - (1 - progress) ** 4;
      const current = Math.round(from + easeOutQuart * (to - from));

      setDisplayValue(current);

      if (progress < 1) {
        requestId = requestAnimationFrame(animateCount);
      } else {
        previousValueRef.current = to;
        hasStartedRef.current = true;
      }
    };

    requestId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [value, duration, enabled]);

  return enabled ? displayValue : 0;
}
