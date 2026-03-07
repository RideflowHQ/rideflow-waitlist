"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllServices } from "@/lib/services-data";
import { TextAnimate } from "@/components/ui/text-animate";

interface OtherServicesProps {
  currentServiceId: string;
}

export const OtherServices = ({ currentServiceId }: OtherServicesProps) => {
  const allServices = getAllServices();
  // Get two other services, excluding the current one
  const otherServices = allServices
    .filter((service) => service.id !== currentServiceId)
    .slice(0, 2);

  return (
    <section className="py-16 md:py-24 lg:py-34 bg-[#04081A]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8 lg:gap-6">
        <div className="w-full lg:w-[40%]">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-2xl sm:text-3xl md:text-[2.6rem] font-medium text-white mb-4 md:mb-5"
          >
            Other Services
          </TextAnimate>
          <p className="text-white font-normal mb-6 md:mb-8 text-base md:text-lg w-full lg:w-[70%]">
            Explore our full range of services tailored to fit every need, from
            fleet management to operational clarity.
          </p>
          <Link href="/services">
            <Button className="bg-rideflow-blue hover:bg-rideflow-blue px-8">
              View All Services
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
          {otherServices.map((item) => (
            <Link
              key={item.id}
              href={`/services/${item.slug}`}
              className="bg-white p-4 rounded-[20px]"
            >
              <div className="rounded-2xl aspect-video relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-medium mt-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-rideflow-text mt-2 font-light">
                {item.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
