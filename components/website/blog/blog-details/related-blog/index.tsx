"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const data = [
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
];

export const RelatedBlogs = () => {
  return (
    <section className="pb-16 md:pb-28">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl sm:text-3xl md:text-[2.6rem] font-semibold mb-6 md:mb-8 text-center">
          Related Blogs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 text-left">
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.id}`}
              className={`p-3 rounded-[20px] bg-[#F1F1F2] flex flex-col sm:flex-row gap-4`}
            >
              <div className="rounded-2xl aspect-square sm:aspect-video relative overflow-hidden flex-1">
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
              <div className="flex-none sm:flex-1 flex flex-col justify-between py-2">
                <div>
                  <p className="text-sm text-gray-600">{item.date}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="flex gap-1 items-center text-sm mt-3 sm:mt-0">
                  <span className="underline">Read Full Blog</span>{" "}
                  <ArrowRight size={16} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
