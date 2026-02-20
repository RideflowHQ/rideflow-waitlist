"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: "2",
    imageUrl: "/service/bikes.webp",
    title: "Fleet & Asset Management",
    description:
      "We offer a unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
  },
  {
    id: "3",
    imageUrl: "/service/bike-man.webp",
    title: "Rider & Workforce Management",
    description:
      "We offer a unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
  },
];

export const OtherServices = () => {
  return (
    <section className="py-18 bg-[#04081A]">
      <div className="container mx-auto px-4 flex gap-6">
        <div className="w-[40%]">
          <h2 className="text-[2.6rem] font-medium text-white mb-5">
            Other Services
          </h2>
          <p className="text-white font-normal mb-8 text-lg w-[70%]">
            Explore our full range of services tailored to fit every need, from
            fleet management to operational clarity.
          </p>
          <Button className="bg-rideflow-blue">View All Services</Button>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/services/${item.id}`}
              className="bg-white p-4 rounded-[20px]"
            >
              <div className="rounded-[16px] aspect-[16/9] relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-medium mt-4">{item.title}</h3>
              <p className="text-rideflow-text mt-2 font-light">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
