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
import { CardStack } from "@/components/ui/card-stack";
import { PhoneFrame } from "./frames";

type Shot = {
  src: string;
  alt: string;
};

const steps = [
  {
    id: "online",
    who: "Rider",
    side: "In Ride",
    title: "Go online. Work finds you.",
    text: "Open Ride, stay on the map, and wait for work. Independent riders see nearby jobs. Company riders get assigned orders on Home.",
    phones: [
      {
        src: "/home/product/rider-wait.svg",
        alt: "Independent rider dispatch with earnings and Go online",
      },
      {
        src: "/home/product/rider-assigned.svg",
        alt: "Company rider Home with assigned orders in Ikeja",
      },
    ] satisfies Shot[],
  },
  {
    id: "job",
    who: "Rider",
    side: "In Ride",
    title: "A request hits the phone.",
    text: "The fare, the pickup, and the trip land as a sheet. Take ₦3,000 as offered, or send your own number.",
    phones: [
      {
        src: "/home/product/rider-request.svg",
        alt: "Incoming delivery request for about ₦3,000, 9 minutes away",
      },
      {
        src: "/home/product/rider-accept.svg",
        alt: "Rider choosing Accept for ₦3,000 or offering another fare",
      },
    ] satisfies Shot[],
  },
  {
    id: "run",
    who: "Rider",
    side: "On the road",
    title: "Pickup, then the drop.",
    text: "The map walks you to the pickup, then the drop. Order details stay on the phone with the customer’s notes.",
    phones: [
      {
        src: "/home/product/rider-navigate.svg",
        alt: "Turn-by-turn map to the pickup for order RF-2038",
      },
      {
        src: "/home/product/rider-trip.svg",
        alt: "Active order details with pickup, drop-off, and package notes",
      },
    ] satisfies Shot[],
  },
  {
    id: "paid",
    who: "Rider",
    side: "In Ride",
    title: "PIN, then the wallet.",
    text: "Confirm delivery with the PIN, close the job, and the fare shows in Wallet — ₦18,000 in, ₦2,000 waiting.",
    phones: [
      {
        src: "/home/product/rider-done.svg",
        alt: "Delivery completed screen with confirm PIN for order RF-2038",
      },
      {
        src: "/home/product/rider-balance.svg",
        alt: "Rider wallet showing ₦18,000 available and a ₦2,000 pending payout",
      },
    ] satisfies Shot[],
  },
];

type Step = (typeof steps)[number];

function PhonePair({ phones }: { phones: Shot[] }) {
  const items = phones.map((phone, index) => ({
    id: index,
    name: "",
    designation: "",
    content: (
      <div className="h-full">
        <PhoneFrame src={phone.src} alt={phone.alt} sizes="520px" />
      </div>
    ),
  }));

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-1/2 top-0 w-[min(88%,20rem)] -translate-x-1/2 lg:bottom-0 lg:left-auto lg:right-[2%] lg:top-auto lg:h-[calc(100%-2.5rem)] lg:w-auto lg:translate-x-0"
        style={{ aspectRatio: "430 / 820" }}
      >
        <CardStack
          key={phones.map((phone) => phone.src).join()}
          items={items}
          offset={36}
          scaleFactor={0.06}
          intervalMs={3000}
          className="h-full w-full cursor-pointer"
          cardClassName="h-full w-full border-0 bg-transparent p-0 shadow-none dark:bg-transparent"
        />
      </div>
    </div>
  );
}

function Stage({ step }: { step: Step }) {
  return (
    <div className="relative h-full min-h-0 pt-2 lg:pt-10">
      <PhonePair phones={step.phones} />
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

function FlowHeader({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <Badge
        text="For riders"
        color="border border-[#3A3A3A] bg-transparent text-white"
      />
      <div className={compact ? "mt-2 lg:mt-3" : "mt-3"}>
        <h2 className="text-[1.55rem] font-medium leading-[1.12] tracking-tight text-white sm:text-[2rem]">
          Ride on your terms.
        </h2>
        <p
          className={`mt-2 max-w-sm text-sm leading-6 text-[#B8BBC4] ${
            compact ? "hidden lg:block" : ""
          }`}
        >
          Independent riders get discovered on Hubs too. Go online when you
          want, accept or counter the fare, and build your rating with every
          delivery.
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
        className="w-full cursor-pointer py-2.5 pl-7 text-left"
      >
        <span>
          <span className="flex items-baseline gap-3">
            <span
              className={`text-sm font-semibold ${
                selected ? "text-rideflow-blue" : "text-white/35"
              }`}
            >
              0{index + 1}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {step.who}
            </span>
          </span>
          <span
            className={`mt-1 block text-lg font-semibold tracking-[-0.02em] ${
              selected ? "text-white" : "text-white/55"
            }`}
          >
            {step.title}
          </span>
          {selected && (
            <span className="mt-1.5 block max-w-md text-sm leading-6 text-[#B8BBC4]">
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
    <svg viewBox="0 0 16 20" fill="none" aria-hidden className={className}>
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
      <div className="relative mx-auto h-full w-px bg-white/15">
        <motion.div
          className="h-full w-[2px] origin-top -translate-x-px bg-rideflow-blue"
          style={{ scaleY: progress }}
        />
      </div>
      <motion.span
        className="absolute left-1/2 text-rideflow-blue drop-shadow-[0_0_8px_rgba(40,68,232,0.45)]"
        style={{ top: arrowTop, x: "-50%", y: "-50%" }}
      >
        <FlowArrow className="size-4" />
      </motion.span>
    </div>
  );
}

function StaticFlow({
  id,
  coverPrevious = false,
}: {
  id: string;
  coverPrevious?: boolean;
}) {
  const [activeId, setActiveId] = useState(steps[0].id);
  const active = steps.find((step) => step.id === activeId) ?? steps[0];

  return (
    <section
      id={id}
      className={`scroll-mt-28 bg-rideflow-ink-hard py-16 md:py-24 ${
        coverPrevious
          ? "relative z-10 -mt-[70svh] rounded-t-[2rem] shadow-[0_-40px_80px_rgba(14,14,14,0.28)]"
          : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-10">
          <div>
            <FlowHeader />
            <ol className="mt-8 flex flex-col">
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
          </div>
          <div className="min-h-[70vh]">
            <Stage step={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollFlow({
  id,
  coverPrevious = false,
}: {
  id: string;
  coverPrevious?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(steps.length - 1, Math.floor(value * steps.length));
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
      className={`relative z-10 bg-rideflow-ink-hard ${
        coverPrevious
          ? "-mt-[100svh] rounded-t-[2rem] shadow-[0_-48px_90px_rgba(14,14,14,0.35)]"
          : ""
      }`}
      style={{ height: `${steps.length * 80}vh` }}
    >
      <div className="sticky top-24 flex h-[calc(100svh-6.5rem)] flex-col overflow-hidden py-2">
        <div className="container mx-auto flex min-h-0 flex-1 px-6">
          <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] items-stretch gap-3 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:grid-rows-1 lg:gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
            <div className="flex min-h-0 flex-col">
              <FlowHeader compact />
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10 lg:hidden">
                <motion.div
                  className="h-full origin-left bg-rideflow-blue"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
              <div className="mt-3 flex min-h-0 flex-col lg:hidden">
                <p className="text-sm font-semibold text-rideflow-blue">
                  0{activeIndex + 1}
                  <span className="ml-2 text-[11px] uppercase tracking-[0.14em] text-white/40">
                    {active.who}
                  </span>
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-white">
                  {active.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm leading-5 text-[#B8BBC4]">
                  {active.text}
                </p>
              </div>
              <ol className="relative mt-4 hidden min-h-0 flex-1 flex-col justify-center lg:flex">
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

            <div className="relative min-h-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    y: index === activeIndex ? 0 : 28,
                    scale: index === activeIndex ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    pointerEvents: index === activeIndex ? "auto" : "none",
                  }}
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

export function RiderFlow({
  id = "for-riders",
  coverPrevious = false,
}: {
  id?: string;
  coverPrevious?: boolean;
}) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return <StaticFlow id={id} coverPrevious={coverPrevious} />;
  return <ScrollFlow id={id} coverPrevious={coverPrevious} />;
}
