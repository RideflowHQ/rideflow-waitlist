import React from "react";
import ServicesCards from "./cards";

export const ServiceDetails = () => {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4 flex justify-center text-left">
        <div className="w-[60%] space-y-8">
          <div>
            <h2 className="text-[1.8rem] font-medium text-foreground mb-4">
              Service Overview
            </h2>
            <p className="font-light mb-5">
              In addition to transforming logistics operations, RideFlow offers
              a unique opportunity for individuals and organizations to invest
              in mobility assets and earn sustainable, reliable returns.
            </p>
            <p className="font-light">
              Through our Asset Purchase Investment, investors can purchase a
              motorcycle (or multiple units) and allow RideFlow to manage every
              aspect of its operation, from rider assignment to daily tracking.
            </p>
          </div>
          <div>
            <h2 className="text-[1.8rem] font-medium text-foreground mb-4">
              Why Choose Us
            </h2>
            <ul className="font-light mb-4 list-disc list-inside space-y-1 pl-5">
              <li>Hassle‑free, passive income</li>
              <li>Transparent reporting and asset monitoring</li>
              <li>Full rider management with performance oversight</li>
              <li>High‑demand transportation sector</li>
              <li>Secure and well‑structured investment cycle</li>
            </ul>
            <p className="font-light">
              With RideFlow, your investment works for you while we handle the
              operations.
            </p>
          </div>
          <div>
            <h2 className="text-[1.8rem] font-medium text-foreground mb-4">
              How It Works
            </h2>
            <p className="font-light mb-5">
              In addition to transforming logistics operations, RideFlow offers
              a unique opportunity for individuals and organizations to invest
              in mobility assets and earn sustainable, reliable returns.
            </p>
            <p className="font-light">
              Through our Asset Purchase Investment, investors can purchase a
              motorcycle (or multiple units) and allow RideFlow to manage every
              aspect of its operation, from rider assignment to daily tracking.
            </p>
          </div>
          <ServicesCards />
        </div>
      </div>
    </section>
  );
};
