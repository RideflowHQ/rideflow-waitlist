"use client";
import Image from "next/image";
import BlogDetails from "./details";

export const DetailHero = () => {
  return (
    <section className="py-18 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <div className="pt-28">
          <div className="pb-5 text-[#595959]">
            <span className="inline-block px-2 py-1 bg-[#F1F1F2] text-[#595959] rounded-[6px] font-semibold mr-2">
              Logistics Tips
            </span>
            
            Feb 1, 2026
          </div>
          <h1 className="text-4xl md:text-[2.6rem] font-semibold text-foreground ">
            The Future of Logistics Is Operational Clarity
          </h1>
          <p className="text-lg md:text-xl text-rideflow-text mt-4 w-[50%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae...
          </p>
        </div>

        <div className="px-20 mt-15">
          <div className="aspect-[16/9] relative">
            <Image
              src="/service/service-handshake.webp"
              alt="Service Handshake"
              fill
              className="mx-auto rounded-[25px] object-cover"
            />
          </div>
        </div>
        <BlogDetails />
      </div>
    </section>
  );
};
