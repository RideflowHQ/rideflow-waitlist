import React from "react";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ServicesCardsProps {
  steps: Step[];
}

const ServicesCards = ({ steps }: ServicesCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pb-10 md:pb-15">
      {steps.map((item) => (
        <div
          key={item.step}
          className="bg-white rounded-[25px] py-6 px-5 flex flex-col gap-6 md:gap-10 items-start"
        >
          <div className="rounded-full bg-rideflow-blue text-white w-7 h-7 flex items-center justify-center text-sm">
            {item.step}
          </div>
          <div>
            <h4 className="font-medium mb-2 text-base md:text-lg">
              {item.title}
            </h4>
            <p className="text-sm md:text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;
