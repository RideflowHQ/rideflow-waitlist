"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: "1",
    imageUrl: "/service/service-handshake.webp",
    title: "Asset Investment [Hire Purchase]",
    description:
      "We offer a unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
  },
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
  {
    id: "4",
    imageUrl: "/service/office-man.webp",
    title: "Logistics & Operations Management",
    description:
      "We offer a unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
  },
  {
    id: "5",
    imageUrl: "/service/female-boss.webp",
    title: "Payments, Payroll & Installments",
    description:
      "We offer a unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
  },
  {
    id: "6",
    imageUrl: "/service/office-girl.webp",
    title: "Reporting, Insights & Control Dashboard",
    description:
      "We offer a unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
  },
];

const ServicesCards = () => {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-3 gap-6 text-left">
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
      <div className="flex justify-center mt-18">
        <Button className="bg-rideflow-blue">Get Started</Button>
      </div>
    </div>
  );
};

export default ServicesCards;
