"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllServices } from "@/lib/services-data";

const ServicesCards = () => {
  const data = getAllServices();
  return (
    <div className="mt-10 md:mt-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/services/${item.id}`}
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
      <div className="flex justify-center mt-12 md:mt-18">
        <Button
          className="bg-rideflow-blue w-max hover:bg-blue-700 px-8 py-2"
          onClick={() => {
            window.open("https://dashboard.rideflow.org/auth/login", "_blank");
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ServicesCards;
