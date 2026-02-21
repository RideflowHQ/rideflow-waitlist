"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: "1",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: true,
  },
  {
    id: "2",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: false,
  },
  {
    id: "3",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: false,
  },
  {
    id: "4",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: false,
  },
  {
    id: "5",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: false,
  },
  {
    id: "6",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: false,
  },
  {
    id: "7",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: false,
  },
  {
    id: "8",
    imageUrl: "/service/service-handshake.webp",
    title: "The Future of Logistics Is Operational Clarity",
    date: "Feb 1, 2026",
    isFeatured: false,
  },
];

const BlogsCards = () => {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-2 gap-6 text-left">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/blog/${item.id}`}
            className={`p-3 rounded-[20px] bg-[#F1F1F2] flex gap-4`}
          >
            <div className="rounded-[16px] aspect-[16/9] relative overflow-hidden flex-1">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
              {item.isFeatured && (
                <span className="absolute top-2 left-2 bg-rideflow-blue text-white text-xs font-semibold px-2 py-1 rounded">
                  Featured Blog
                </span>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-600">{item.date}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="flex gap-1 items-center text-sm">
                <span className="underline">Read Full Blog</span>{" "}
                <ArrowRight size={16} />
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-18">
        <Button className="bg-rideflow-blue">Load More</Button>
      </div>
    </div>
  );
};

export default BlogsCards;
