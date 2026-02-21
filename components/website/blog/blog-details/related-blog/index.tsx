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
    <section className="pb-28">
      <div className="container mx-auto px-4">
        <h1 className="text-[2.6rem] font-semibold mb-8 text-center">
          Related Blogs
        </h1>
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
      </div>
    </section>
  );
};
