"use client";
import Badge from "@/components/custom/badge";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { homeTestimonials } from "@/lib/content/site";

export const TestimoniesSection = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();

  const scrollPrev = () => carouselApi?.scrollPrev();
  const scrollNext = () => carouselApi?.scrollNext();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div
        className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-10 lg:mb-12"
        id="testimonies"
      >
        <div className="flex flex-col gap-3 md:gap-4">
          <Badge text="What Our Users Say" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="font-medium text-4xl sm:text-4xl md:text-4xl lg:text-[2.6rem] leading-tight md:w-[60%]"
          >
            Built for the People Running Nigeria&apos;s Logistics.
          </TextAnimate>
        </div>

        <div className="hidden sm:flex gap-2">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded bg-body-gray flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded bg-body-gray flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative min-h-100 overflow-hidden">
        <div className="carousel-left-aligned">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: false,
              slidesToScroll: "auto",
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {homeTestimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-3 sm:pl-4 basis-[90%] sm:basis-[70%] md:basis-[50%] lg:basis-[28%]"
                >
                  <div className="bg-body-gray rounded-2xl p-6 sm:p-7 md:p-9 h-full flex flex-col justify-between min-h-100">
                    <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-2 sm:gap-3 border-t border-dashed border-[#808080] pt-4 sm:pt-6">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded overflow-hidden relative shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 flex sm:hidden justify-center gap-2">
        <button
          onClick={scrollPrev}
          className="w-9 h-9 rounded bg-body-gray flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={scrollNext}
          className="w-9 h-9 rounded bg-body-gray flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
