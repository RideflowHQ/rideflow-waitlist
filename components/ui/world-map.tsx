"use client";

import { useMemo, useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    [],
  );

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const pin = map.getPin({ lat, lng });
    if (!pin) return { x: 0, y: 0 };
    return { x: pin.x, y: pin.y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2;
    const lift = Math.min(14, Math.abs(end.x - start.x) * 0.18 + 4);
    const midY = Math.min(start.y, end.y) - lift;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const origins = [
    ...new Map(
      dots.map((dot) => [`${dot.start.lat},${dot.start.lng}`, dot.start]),
    ).values(),
  ];
  const destinations = [
    ...new Map(
      dots.map((dot) => [`${dot.end.lat},${dot.end.lng}`, dot.end]),
    ).values(),
  ];

  return (
    <div className="relative w-full rounded-lg bg-white font-sans aspect-[2/1]">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none h-full w-full select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox={`0 0 ${map.image.width} ${map.image.height}`}
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="0.35"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {destinations.map((point, i) => {
          const { x, y } = projectPoint(point.lat, point.lng);
          return (
            <g key={`end-${i}`}>
              <circle cx={x} cy={y} r="0.55" fill={lineColor} />
              <circle cx={x} cy={y} r="0.55" fill={lineColor} opacity="0.45">
                <animate
                  attributeName="r"
                  from="0.55"
                  to="1.6"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.45"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {origins.map((point, i) => {
          const { x, y } = projectPoint(point.lat, point.lng);
          return (
            <g key={`origin-${i}`}>
              <circle cx={x} cy={y} r="1.05" fill={lineColor} />
              <circle cx={x} cy={y} r="1.05" fill={lineColor} opacity="0.5">
                <animate
                  attributeName="r"
                  from="1.05"
                  to="3.4"
                  dur="1.8s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.8s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
              {point.label ? (
                <text
                  x={x}
                  y={y + 4.2}
                  textAnchor="middle"
                  fill="#0e0e0e"
                  stroke="#ffffff"
                  strokeWidth="0.9"
                  paintOrder="stroke"
                  fontSize="3.2"
                  fontWeight="700"
                  letterSpacing="0.12em"
                >
                  {point.label.toUpperCase()}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
