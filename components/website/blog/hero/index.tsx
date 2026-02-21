import React from "react";
import BlogsCards from "./cards";

export const BlogHero = () => {
  return (
    <section className="py-18 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-semibold text-foreground pt-28">
          Rideflow Blog
        </h1>
        <p className="text-lg md:text-xl text-rideflow-text mt-4 w-[50%] mx-auto">
          Insights, ideas, and practical lessons on logistics, operations, and
          building smarter delivery systems — written for teams that move things
          every day.
        </p>
        <BlogsCards />
      </div>
    </section>
  );
};
