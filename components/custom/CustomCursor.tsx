"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const TEXT_TAGS = [
  "P",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "SPAN",
  "A",
  "LABEL",
  "LI",
  "BUTTON",
];

type CursorState = "default" | "text" | "dark";

function getBackgroundLuminance(el: HTMLElement): number | null {
  let node: HTMLElement | null = el;
  while (node && node !== document.documentElement) {
    const bg = window.getComputedStyle(node).backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      const [, r, g, b] = match.map(Number);
      if (r === 0 && g === 0 && b === 0) {
        node = node.parentElement;
        continue;
      }
      // Perceived luminance
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    node = node.parentElement;
  }
  return null;
}

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 250, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const luminance = getBackgroundLuminance(target);
      const isDark = luminance !== null && luminance < 0.35;

      if (isDark) {
        setCursorState("dark");
      } else {
        const isText =
          TEXT_TAGS.includes(target.tagName) ||
          window.getComputedStyle(target).cursor === "text";
        setCursorState(isText ? "text" : "default");
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "#2844e8",
      borderColor: "#2844e8",
      opacity: 1,
    },
    text: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(40, 68, 232, 0.12)",
      borderColor: "#2844e8",
      opacity: 1,
    },
    dark: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "#ffffff",
      opacity: 1,
    },
  };

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-9999 pointer-events-none rounded-full border-2"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={isVisible ? variants[cursorState] : { opacity: 0 }}
      transition={{
        width: { type: "spring", damping: 20, stiffness: 300 },
        height: { type: "spring", damping: 20, stiffness: 300 },
        backgroundColor: { duration: 0.25 },
        borderColor: { duration: 0.25 },
        opacity: { duration: 0.2 },
      }}
    />
  );
}
