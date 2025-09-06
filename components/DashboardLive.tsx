"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const images = [
  { src: "/staff-arrow.svg", position: { top: "10%", left: "-1%" } },
  { src: "/fleet-arrow.svg", position: { top: "35%", left: "-1%" } },
  { src: "/performance-arrow.svg", position: { bottom: "30%", left: "45%" } },
  { src: "/control-arrow.svg", position: { bottom: "40%", right: "10%" } },
  { src: "/delivery-arrow.svg", position: { top: "20%", right: "30%" } },
  { src: "/route-arrow.svg", position: { top: "10%", right: "1%" } },
];

const SpringArrow = ({
  src,
  position,
  delay,
}: {
  src: string;
  position: any;
  delay: number;
}) => {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={position}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 0.95, 1.05, 1],
        opacity: [0, 1, 1, 1, 0],
        rotate: [0, 10, -5, 0],
        y: [0, -15, -8, -12, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 3 + Math.random() * 2, // makes each pop feel more organic
        delay,
        ease: "easeOut",
        times: [0, 0.3, 0.5, 0.7, 1],
      }}
    >
      <Image
        src={src}
        width={200}
        height={200}
        alt="Arrow"
        className="object-contain"
      />
    </motion.div>
  );
};

const DashboardLive = () => {
  return (
    <div className="relative w-full">
      <motion.section
        className="relative w-full flex  items-start p-2 rounded-2xl bg-white shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Spring Arrows */}
        <AnimatePresence>
          {images.map((image, index) => (
            <SpringArrow
              key={`${image.src}-${index}`}
              src={image.src}
              position={image.position}
              delay={index * 0.8}
            />
          ))}
        </AnimatePresence>

        {/* Left Sidebar */}
        <motion.div
          className="flex-2 p-2 flex-col  w-full h-full gap-10 border-r border-ridebg-rideflow-text-extralight/10 relative z-10 hidden md:flex"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            className="object-contain"
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
          />
          <ul className="flex flex-col gap-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Skeleton className="h-8 w-full bg-rideflow-text-extralight/10" />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex-7 h-full flex flex-col justify-between gap-10 px-4 relative z-10"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Header Section */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <Skeleton className="bg-rideflow-text-extralight/10 h-7 w-[5rem] md:w-[30rem]" />
              <Skeleton className="bg-rideflow-text-extralight/10 h-7 w-[2rem] md:w-[10rem]" />
            </div>
            <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between">
              <div className="flex flex-col gap-3">
                <Skeleton className="bg-rideflow-text-extralight/10 h-7 w-[4rem] md:w-[10rem]" />
                <Skeleton className="bg-rideflow-text-extralight/10 h-4 w-[10rem] md:w-[20rem]" />
              </div>
              <div className="flex gap-3 items-center">
                <Skeleton className="bg-rideflow-text-extralight/10 h-7 w-[10rem]" />
                <Skeleton className="bg-rideflow-text-extralight/10 h-7 w-[8rem]" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Grid Section */}
          <motion.div
            className="flex justify-between items-start md:gap-7 gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Grid Cards */}
            <motion.div
              className="flex-5 p-4 bg-rideflow-text-extralight/10 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {Array.from({ length: 12 }).map((_, index) => (
                  <motion.li
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 1 + index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Skeleton className="h-20 md:h-30 w-[4rem] md:w-[7rem] gap-1 md:gap-4 bg-white" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Side Panel */}
            <motion.div
              className="flex-3 p-4 bg-rideflow-text-extralight/10 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-5">
                {Array.from({ length: 3 }).map((_, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.2,
                    }}
                    whileHover={{
                      x: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Skeleton className="h-[6rem] md:h-[10rem] w-full bg-white" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default DashboardLive;
