import React from "react";
import BlogsCards from "./cards";
import Image from "next/image";

export const BlogHero = () => {
  return (
    <section className="py-12 md:py-18 min-h-screen relative">
      <Image
        src="/home/blog-curve-right.svg"
        alt="curve"
        height={250}
        width={250}
        className="absolute top-0 right-0 -z-5 hidden md:block"
      />
      <Image
        src="/home/blog-curve-left.svg"
        alt="curve"
        height={250}
        width={250}
        className="absolute top-0 left-0 -z-5 hidden md:block"
      />
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground pt-28">
          Rideflow Blog
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-rideflow-text mt-4 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
          Insights, ideas, and practical lessons on logistics, operations, and
          building smarter delivery systems — written for teams that move things
          every day.
        </p>
        <BlogsCards />
      </div>
    </section>
  );
};
