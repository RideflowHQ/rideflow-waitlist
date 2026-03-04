import React from "react";
import ServicesCards from "./cards";
import { ServiceData } from "@/lib/services-data";

interface ServiceDetailsProps {
  service: ServiceData;
}

export const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-6 flex justify-center text-left">
        <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] space-y-6 md:space-y-8">
          {service.overview && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-[1.8rem] font-medium text-foreground mb-4">
                Service Overview
              </h2>
              <p className="font-light">{service.overview}</p>
            </div>
          )}
          {service.whyChoose && service.whyChoose.length > 0 && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-[1.8rem] font-medium text-foreground mb-4">
                Why Choose Rideflow
              </h2>
              <ul className="font-light mb-4 list-disc list-inside space-y-1 pl-5">
                {service.whyChoose.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
              {service.whyChooseClosing && (
                <p className="font-light">{service.whyChooseClosing}</p>
              )}
            </div>
          )}
          {service.howItWorks && service.howItWorks.length > 0 && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-[1.8rem] font-medium text-foreground mb-4">
                How It Works
              </h2>
              <ServicesCards steps={service.howItWorks} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
