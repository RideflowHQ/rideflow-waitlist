import React from "react";

const ServicesCards = () => {
  return (
    <div className="grid grid-cols-2 gap-6 pb-15">
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center">
          01
        </div>
        <div>
          <h4 className="font-medium mb-2">Invest in an asset</h4>
          <p>
            You purchase a bike through RideFlow, and we handle the procurement,
            documentation, and full registration.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center">
          02
        </div>
        <div>
          <h4 className="font-medium mb-2">We assign a verified rider</h4>
          <p>
            RideFlow screens, trains, and deploys a professional rider to
            operate the asset.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center">
          03
        </div>
        <div>
          <h4 className="font-medium mb-2">Full operational management</h4>
          <p>
            We take care of performance tracking, route monitoring, maintenance
            oversight, and all daily operations.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-10 items-start">
        <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center">
          04
        </div>
        <div>
          <h4 className="font-medium mb-2">You earn steady returns</h4>
          <p>
            Investors receive consistent payouts over a 12‑month period, backed
            by clear financial reporting and dependable remittances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
