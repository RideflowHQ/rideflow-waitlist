"use client";

import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { homeSteps, CALENDLY_URL } from "@/lib/content/site";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const SCROLL_SEGMENTS_VH = 280;

type LineGeometry = {
  line1: string;
  line2: string;
  length1: number;
  length2: number;
};

const EMPTY_GEOMETRY: LineGeometry = {
  line1: "",
  line2: "",
  length1: 0,
  length2: 0,
};

function StepAnchor({
  active,
  reached,
}: {
  active: boolean;
  reached: boolean;
}) {
  return (
    <div
      className={`relative z-10 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
        active
          ? "border-rideflow-blue bg-rideflow-blue shadow-[0_0_0_6px_rgba(40,68,232,0.2)] scale-110"
          : reached
            ? "border-rideflow-blue/60 bg-[#04081A]"
            : "border-white/30 bg-[#04081A]"
      }`}
    >
      <div
        className={`size-1.5 rounded-full transition-all duration-500 ${
          active ? "bg-white scale-100" : "bg-transparent scale-0"
        }`}
      />
    </div>
  );
}

function AnimatedConnector({
  path,
  length,
  progress,
}: {
  path: string;
  length: number;
  progress: MotionValue<number>;
}) {
  const dashOffset = useTransform(progress, (value) => length * (1 - value));

  if (!path || !length) return null;

  return (
    <motion.path
      d={path}
      stroke="#2844e8"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeDasharray={length}
      style={{ strokeDashoffset: dashOffset }}
    />
  );
}

function useStepLineGeometry(
  containerRef: RefObject<HTMLDivElement | null>,
  anchorRefs: RefObject<(HTMLDivElement | null)[]>,
) {
  const [geometry, setGeometry] = useState<LineGeometry>(EMPTY_GEOMETRY);

  const updateGeometry = useCallback(() => {
    const container = containerRef.current;
    const anchors = anchorRefs.current?.filter(Boolean) as HTMLDivElement[];

    if (!container || !anchors || anchors.length < 3) return;

    const containerRect = container.getBoundingClientRect();
    const points = anchors.map((element) => {
      const rect = element.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    });

    const line1 = `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
    const line2 = `M ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y}`;

    setGeometry({
      line1,
      line2,
      length1: Math.hypot(
        points[1].x - points[0].x,
        points[1].y - points[0].y,
      ),
      length2: Math.hypot(
        points[2].x - points[1].x,
        points[2].y - points[1].y,
      ),
    });
  }, [anchorRefs, containerRef]);

  useEffect(() => {
    updateGeometry();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateGeometry);
    });

    observer.observe(container);
    window.addEventListener("resize", updateGeometry);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [containerRef, updateGeometry]);

  return geometry;
}

function StepsTimeline({
  activeStep,
  reachedSteps,
  anchorRefs,
  stepsColumnRef,
  lineGeometry,
  line1Draw,
  line2Draw,
  compact = false,
}: {
  activeStep: number;
  reachedSteps: number;
  anchorRefs: RefObject<(HTMLDivElement | null)[]>;
  stepsColumnRef: RefObject<HTMLDivElement | null>;
  lineGeometry: LineGeometry;
  line1Draw?: MotionValue<number>;
  line2Draw?: MotionValue<number>;
  compact?: boolean;
}) {
  return (
    <div ref={stepsColumnRef} className="relative">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        {lineGeometry.line1 ? (
          <path
            d={lineGeometry.line1}
            stroke="white"
            strokeOpacity={0.12}
            strokeWidth={2}
            fill="none"
          />
        ) : null}
        {lineGeometry.line2 ? (
          <path
            d={lineGeometry.line2}
            stroke="white"
            strokeOpacity={0.12}
            strokeWidth={2}
            fill="none"
          />
        ) : null}
        {line1Draw ? (
          <AnimatedConnector
            path={lineGeometry.line1}
            length={lineGeometry.length1}
            progress={line1Draw}
          />
        ) : null}
        {line2Draw ? (
          <AnimatedConnector
            path={lineGeometry.line2}
            length={lineGeometry.length2}
            progress={line2Draw}
          />
        ) : null}
      </svg>

      <div
        className={`relative flex flex-col text-white ${
          compact ? "mt-8 gap-6 md:gap-8" : "mt-12 gap-10 lg:gap-12"
        }`}
      >
        {homeSteps.map((step, index) => {
          const isActive = activeStep === index;
          const isReached = reachedSteps >= index;

          return (
            <div key={step.title} className="flex gap-4 md:gap-5">
              <div
                ref={(element) => {
                  if (anchorRefs.current) {
                    anchorRefs.current[index] = element;
                  }
                }}
                className="pt-1"
              >
                <StepAnchor active={isActive} reached={isReached} />
              </div>
              <div
                className={`transition-all duration-500 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : isReached
                      ? "opacity-55 translate-x-0"
                      : "opacity-35 translate-x-0"
                }`}
              >
                <p
                  className={`font-medium transition-colors duration-500 ${
                    compact
                      ? "text-lg sm:text-xl md:text-2xl"
                      : "text-xl md:text-2xl"
                  } ${isActive ? "text-white" : "text-white/80"}`}
                >
                  Step {index + 1}: {step.title}
                </p>
                <p
                  className={`mt-1 font-light leading-relaxed ${
                    compact ? "text-sm sm:text-base" : "text-sm md:text-base"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileHowItWorks() {
  const stepsColumnRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineGeometry = useStepLineGeometry(stepsColumnRef, anchorRefs);

  return (
    <div className="lg:hidden">
      <div className="relative h-87.5 w-full sm:h-112.5">
        <Image
          src="/home/woman-overall.webp"
          alt="Overall Woman"
          fill
          className="object-cover"
        />
      </div>

      <div className="px-6 py-12 md:py-15">
        <div className="space-y-3 md:space-y-4">
          <Badge text="Getting Started" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
          >
            Up and Running in Three Steps.
          </TextAnimate>
        </div>

        <StepsTimeline
          activeStep={2}
          reachedSteps={2}
          anchorRefs={anchorRefs}
          stepsColumnRef={stepsColumnRef}
          lineGeometry={lineGeometry}
          compact
        />

        <Button
          className="mt-8 w-full cursor-pointer bg-rideflow-blue px-4 py-2 font-semibold text-white hover:bg-blue-700 md:mt-10 md:w-max"
          onClick={() => window.open(CALENDLY_URL, "_blank")}
        >
          Book a Demo →
        </Button>
      </div>
    </div>
  );
}

function DesktopHowItWorks({ reducedMotion }: { reducedMotion: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsColumnRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineGeometry = useStepLineGeometry(stepsColumnRef, anchorRefs);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const line1Draw = useTransform(scrollYProgress, [0.08, 0.42], [0, 1]);
  const line2Draw = useTransform(scrollYProgress, [0.42, 0.78], [0, 1]);

  const [activeStep, setActiveStep] = useState(0);
  const [reachedSteps, setReachedSteps] = useState(reducedMotion ? 2 : 0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reducedMotion) return;

    if (progress < 0.28) {
      setActiveStep(0);
      setReachedSteps(0);
    } else if (progress < 0.55) {
      setActiveStep(1);
      setReachedSteps(1);
    } else {
      setActiveStep(2);
      setReachedSteps(2);
    }
  });

  const staticActiveStep = reducedMotion ? 2 : activeStep;
  const staticReachedSteps = reducedMotion ? 2 : reachedSteps;
  const staticLine1 = reducedMotion ? undefined : line1Draw;
  const staticLine2 = reducedMotion ? undefined : line2Draw;

  return (
    <section
      ref={sectionRef}
      className="relative hidden bg-[#04081A] lg:block"
      style={{ height: reducedMotion ? undefined : `${SCROLL_SEGMENTS_VH}vh` }}
    >
      <div
        className={`overflow-hidden bg-[#04081A] ${
          reducedMotion ? "relative min-h-[90vh]" : "sticky top-0 h-screen"
        }`}
      >
        <div className="absolute bottom-0 left-0 right-[57%] top-0 z-0 h-full">
          <Image
            src="/home/woman-overall.webp"
            alt="Overall Woman"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div className="flex w-full items-center">
            <div className="w-[43%]" />
            <div className="w-[57%] py-20 pl-16">
              <div className="space-y-3 md:space-y-4">
                <Badge text="Getting Started" color="bg-white" />
                <TextAnimate
                  animation="blurIn"
                  by="word"
                  startOnView
                  once
                  className="text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl lg:text-[2.6rem]"
                >
                  Up and Running in Three Steps.
                </TextAnimate>
              </div>

              <StepsTimeline
                activeStep={staticActiveStep}
                reachedSteps={staticReachedSteps}
                anchorRefs={anchorRefs}
                stepsColumnRef={stepsColumnRef}
                lineGeometry={lineGeometry}
                line1Draw={staticLine1}
                line2Draw={staticLine2}
              />

              <Button
                className="mt-10 w-max cursor-pointer bg-rideflow-blue px-4 py-2 font-semibold text-white hover:bg-blue-700 lg:mt-12"
                onClick={() => window.open(CALENDLY_URL, "_blank")}
              >
                Book a Demo →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const HowItWorksSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-[#04081A]" id="how-it-works">
      <MobileHowItWorks />
      <DesktopHowItWorks reducedMotion={!!reducedMotion} />
    </section>
  );
};
