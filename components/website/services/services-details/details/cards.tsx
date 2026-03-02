import React from "react";

const ServicesCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pb-10 md:pb-15">
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-6 md:gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center text-sm">
          01
        </div>
        <div>
          <h4 className="font-medium mb-2 text-base md:text-lg">
            Invest in an asset
          </h4>
          <p className="text-sm md:text-base">
            You purchase a bike through RideFlow, and we handle the procurement,
            documentation, and full registration.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-6 md:gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center text-sm">
          02
        </div>
        <div>
          <h4 className="font-medium mb-2 text-base md:text-lg">
            We assign a verified rider
          </h4>
          <p className="text-sm md:text-base">
            RideFlow screens, trains, and deploys a professional rider to
            operate the asset.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-6 md:gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center text-sm">
          03
        </div>
        <div>
          <h4 className="font-medium mb-2 text-base md:text-lg">
            Full operational management
          </h4>
          <p className="text-sm md:text-base">
            We take care of performance tracking, route monitoring, maintenance
            oversight, and all daily operations.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-6 md:gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center text-sm">
          04
        </div>
        <div>
          <h4 className="font-medium mb-2 text-base md:text-lg">
            You earn steady returns
          </h4>
          <p className="text-sm md:text-base">
            Investors receive consistent payouts over a 12‑month period, backed
            by clear financial reporting and dependable remittances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
