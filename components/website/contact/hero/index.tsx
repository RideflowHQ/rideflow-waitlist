"use client";
import React from "react";
import Image from "next/image";
import Cards from "./cards";
import { TextAnimate } from "@/components/ui/text-animate";
import Badge from "@/components/custom/badge";

export const ContactHero = () => {
  return (
    <section className="min-h-screen overflow-hidden relative">
      <div className="absolute top-0 bottom-0 left-1/2 right-0 h-full z-0 hidden lg:block">
        <Image
          src="/contact/contact-man.webp"
          alt="Contact Man"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 h-full relative z-10">
        <div className="h-full flex items-center">
          <div className="w-full lg:w-1/2 py-20 md:pt-30 md:pb-15 lg:pr-8">
            <Badge text="Contact" color="bg-white" />
            <TextAnimate
              animation="blurIn"
              by="word"
              startOnView
              once
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] font-medium mb-3 mt-4"
            >
              Let&apos;s Show You What Rideflow Can Do.
            </TextAnimate>
            <TextAnimate
              animation="blurIn"
              by="word"
              startOnView
              once
              className="text-base sm:text-lg text-rideflow-text mb-6 md:mb-8 w-full lg:w-[83%]"
            >
              Book a demo, ask a question, or just start a conversation.
              We&apos;re based in Lagos and we respond fast.
            </TextAnimate>
            <Cards />
          </div>

          <div className="w-1/2 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
