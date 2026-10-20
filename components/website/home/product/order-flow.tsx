"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import Badge from "@/components/custom/badge";
import { BrowserFrame, PhoneFrame } from "./frames";

const steps = [
  {
    id: "find",
    who: "Customer",
    side: "In the app",
    title: "Find a company or a rider",
    text: "Browse logistics companies and independent riders, or search by name or category. Switch on Rideflow Verified to see only vetted partners.",
    src: "/home/product/explore.svg",
    alt: "Rideflow marketplace listing verified logistics companies",
    device: "phones" as const,
  },
  {
    id: "offer",
    who: "Customer",
    side: "In the app",
    title: "Set the route and your price",
    text: "Drop the pickup, name what you will pay, and send the request. Nearby companies see it immediately.",
    src: "/home/product/order-map.svg",
    alt: "Customer setting a delivery offer on the map",
    device: "phone" as const,
  },
  {
    id: "lands",
    who: "Company",
    side: "On the desk",
    title: "It lands on their desk",
    text: "The request shows up on the company dashboard, with the route and the price the customer offered.",
    src: "/home/product/request.svg",
    alt: "Company dashboard with a new order request notification",
    device: "desktop" as const,
    focus: "top" as const,
  },
  {
    id: "bid",
    who: "Company",
    side: "On the desk",
    title: "They accept, or they bid",
    text: "The company can take the fare as offered, or send back a counter — ₦3,200, ₦3,400, ₦3,600 — or skip it.",
    src: "/home/product/accept-panel.svg",
    alt: "Company reviewing a delivery request and choosing a fare",
    device: "desktop" as const,
    focus: "panel" as const,
  },
  {
    id: "pay",
    who: "Customer",
    side: "In the app",
    title: "You pay, and the job is on",
    text: "Once a fare is agreed, checkout confirms the amount and the service fee. The order is then live for dispatch.",
    src: "/home/product/pay.svg",
    alt: "Customer checkout for an accepted delivery offer",
    device: "phone" as const,
  },
];

type Step = (typeof steps)[number];

function MarketplaceCluster() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[560px]">
      <div
        className="rideflow-float absolute left-[8%] top-[14%] z-0 h-[70%] -rotate-[6deg]"
        style={{ aspectRatio: "390 / 844" }}
      >
        <PhoneFrame
          src="/home/product/company.svg"
          alt="FastTrack Logistics company profile with fees, ratings, and coverage"
        />
      </div>
      <div
        className="rideflow-float-delayed absolute right-[8%] top-[18%] z-0 h-[70%] rotate-[6deg]"
        style={{ aspectRatio: "390 / 844" }}
      >
        <PhoneFrame
          src="/home/product/rider.svg"
          alt="Independent rider profile for Daniel Lukaku, available in Lagos"
        />
      </div>
      <div
        className="absolute left-1/2 top-[2%] z-10 h-[92%] -translate-x-1/2"
        style={{ aspectRatio: "390 / 844" }}
      >
        <PhoneFrame
          src="/home/product/explore.svg"
          alt="Rideflow marketplace listing verified logistics companies"
        />
      </div>
    </div>
  );
}

function Device({ step }: { step: Step }) {
  if (step.device === "phones") {
    return <MarketplaceCluster />;
  }

  if (step.device === "phone") {
    return (
      <div className="h-[min(100%,520px)] max-h-full">
        <div className="h-full" style={{ aspectRatio: "390 / 844" }}>
          <PhoneFrame src={step.src} alt={step.alt} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        step.focus === "panel" ? "mx-auto w-full max-w-[380px]" : "w-full"
      }
    >
      <BrowserFrame src={step.src} alt={step.alt} focus={step.focus} />
    </div>
  );
}

function Stage({ step }: { step: Step }) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <p className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-rideflow-text-extralight">
        <FlowArrow className="size-3 text-rideflow-blue" />
        {step.side}
      </p>
      <div
        className={`flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[28px] px-4 py-5 sm:px-6 ${
          step.device === "desktop" ? "bg-[#f3f4f7]" : "bg-body-gray"
        }`}
      >
        <Device step={step} />
      </div>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduce;
}

function StaticFlow({ id }: { id: string }) {
  const [activeId, setActiveId] = useState(steps[0].id);
  const active = steps.find((step) => step.id === activeId) ?? steps[0];

  return (
    <section id={id} className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <FlowHeader />
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <ol className="flex flex-col">
            {steps.map((step, index) => (
              <StepButton
                key={step.id}
                step={step}
                index={index}
                selected={step.id === active.id}
                onSelect={() => setActiveId(step.id)}
              />
            ))}
          </ol>
          <div className="min-h-[520px]">
            <Stage step={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowHeader() {
  return (
    <>
      <Badge text="How a job moves" color="bg-body-gray" />
      <div className="mt-4 max-w-3xl">
        <h2 className="text-3xl font-medium leading-tight tracking-tight text-rideflow-ink-hard sm:text-4xl lg:text-[2.5rem]">
          From a search to an accepted fare.
        </h2>
        <p className="mt-3 max-w-xl text-base leading-7 text-rideflow-text-light">
          Scroll the route. The customer books in the app, the company answers
          from the desk.
        </p>
      </div>
    </>
  );
}

function StepButton({
  step,
  index,
  selected,
  onSelect,
}: {
  step: Step;
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-current={selected ? "step" : undefined}
        className="w-full cursor-pointer py-3 pl-7 text-left"
      >
        <span>
          <span className="flex items-baseline gap-3">
            <span
              className={`text-sm font-semibold ${
                selected ? "text-rideflow-blue" : "text-rideflow-text-extralight"
              }`}
            >
              0{index + 1}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-rideflow-text-extralight">
              {step.who}
            </span>
          </span>
          <span
            className={`mt-1 block text-lg font-semibold tracking-[-0.02em] ${
              selected ? "text-rideflow-ink-hard" : "text-rideflow-text2"
            }`}
          >
            {step.title}
          </span>
          {selected && (
            <span className="mt-1.5 block max-w-md text-sm leading-6 text-rideflow-text-light">
              {step.text}
            </span>
          )}
        </span>
      </button>
    </li>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M8 1.5v13M3 10.5 8 16.5l5-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Route({ progress }: { progress: MotionValue<number> }) {
  const arrowTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="pointer-events-none absolute bottom-4 left-0 top-4 w-4"
      aria-hidden
    >
      <div className="relative mx-auto h-full w-px bg-rideflow-hairline">
        <motion.div
          className="h-full w-[2px] origin-top -translate-x-px bg-rideflow-blue"
          style={{ scaleY: progress }}
        />
      </div>
      <motion.span
        className="absolute left-1/2 text-rideflow-blue drop-shadow-[0_0_8px_rgba(40,68,232,0.35)]"
        style={{ top: arrowTop, x: "-50%", y: "-50%" }}
      >
        <FlowArrow className="size-4" />
      </motion.span>
    </div>
  );
}

function ScrollFlow({
  id,
  holdForCover = false,
}: {
  id: string;
  holdForCover?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      steps.length - 1,
      Math.floor(value * steps.length),
    );
    setActiveIndex((current) => (current === next ? current : next));
  });

  const active = steps[activeIndex];

  function goTo(index: number) {
    const node = sectionRef.current;
    if (!node) return;
    const start = window.scrollY + node.getBoundingClientRect().top;
    const distance = node.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: start + (index / steps.length) * distance + 2,
      behavior: "smooth",
    });
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative z-0 bg-white"
      style={{
        height: holdForCover
          ? `calc(${steps.length * 85}vh + 100svh)`
          : `${steps.length * 85}vh`,
      }}
    >
      <div className="sticky top-24 z-0 flex h-[calc(100svh-6.5rem)] flex-col overflow-hidden py-4 md:py-6">
        <div className="container mx-auto flex min-h-0 flex-1 flex-col px-6">
          <FlowHeader />

          <div className="mt-5 h-1 overflow-hidden rounded-full bg-rideflow-hairline lg:hidden">
            <motion.div
              className="h-full origin-left bg-rideflow-blue"
              style={{ scaleX: scrollYProgress }}
            />
          </div>

          <div className="mt-4 grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] items-stretch gap-4 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:grid-rows-1 lg:gap-12">
            <div className="hidden min-h-0 lg:block">
              <ol className="relative flex h-full flex-col justify-center">
                <Route progress={scrollYProgress} />
                {steps.map((step, index) => (
                  <StepButton
                    key={step.id}
                    step={step}
                    index={index}
                    selected={index === activeIndex}
                    onSelect={() => goTo(index)}
                  />
                ))}
              </ol>
            </div>

            <div className="flex min-h-0 flex-col lg:hidden">
              <p className="text-sm font-semibold text-rideflow-blue">
                0{activeIndex + 1}
                <span className="ml-2 text-[11px] uppercase tracking-[0.14em] text-rideflow-text-extralight">
                  {active.who}
                </span>
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-rideflow-ink-hard">
                {active.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-rideflow-text-light">
                {active.text}
              </p>
            </div>

            <div className="relative min-h-0 flex-1">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    y: index === activeIndex ? 0 : 18,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ pointerEvents: index === activeIndex ? "auto" : "none" }}
                  aria-hidden={index !== activeIndex}
                >
                  <Stage step={step} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OrderFlow({
  id = "order-flow",
  holdForCover = false,
}: {
  id?: string;
  holdForCover?: boolean;
}) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return <StaticFlow id={id} />;
  return <ScrollFlow id={id} holdForCover={holdForCover} />;
}
