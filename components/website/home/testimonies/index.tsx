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


const testimonials = [
  {
    id: 1,
    quote:
      "Before Rideflow, managing orders and drivers felt chaotic. Now everything is centralized and visible in real time. We're faster, more organized, and far more confident in our daily operations.",
    author: "Destiny Ekpoma",
    role: "Operations Manager, Logistics Company",
    avatar: "/home/african-man.jpg",
  },
  {
    id: 2,
    quote:
      "Rideflow didn't just give us software—it gave us structure. From order tracking to expense monitoring, we finally understand where our money goes and how to operate more profitably.",
    author: "Michael Idris",
    role: "Founder, Delivery Startup",
    avatar: "/home/idris.jpg",
  },
  {
    id: 3,
    quote:
      "Expense tracking and revenue comparison changed how we run the business. We're no longer guessing—we're making decisions backed by real data.",
    author: "Omolara Smith",
    role: "Admin & Finance Lead",
    avatar: "/home/smith.jpg",
  },
  {
    id: 4,
    quote:
      "Tracking fleet usage, documents, and assignments used to be a manual headache. Rideflow brought all of that into one clean system. It's saved us time and reduced costly oversights.",
    author: "Olodo Sulaimon",
    role: "Fleet & Compliance Manager",
    avatar: "/home/olodo.jpg",
  },
  {
    id: 5,
    quote:
      "Tracking fleet usage, documents, and assignments used to be a manual headache. Rideflow brought all of that into one clean system. It's saved us time and reduced costly oversights.",
    author: "Olodo Sulaimon",
    role: "Fleet & Compliance Manager",
    avatar: "/home/olodo.jpg",
  },
];

export const TestimoniesSection = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();

  const scrollPrev = () => carouselApi?.scrollPrev();
  const scrollNext = () => carouselApi?.scrollNext();

  return (
    <section className="py-20 bg-white">
      {/* Header section with controls */}
      <div className="container mx-auto px-4 flex justify-between items-end gap-16 mb-12">
        <div className="flex flex-col gap-4">
          <Badge text="Trusted by clients" color="bg-body-gray" />
          <h2 className="font-medium text-[2.6rem] leading-tight">
            Trusted by teams and
            <br /> businesses alike
          </h2>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2">
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

      {/* Carousel section - starts at container left, extends to viewport right */}
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
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 basis-[85%] sm:basis-[45%] lg:basis-[28%]"
                >
                  <div className="bg-body-gray rounded-2xl p-9 h-full flex flex-col justify-between min-h-100">
                    {/* Quote */}
                    <p className="leading-relaxed mb-8">{testimonial.quote}</p>

                    {/* Author info */}
                    <div className="flex items-center gap-3 border-t border-dashed border-[#808080] pt-6">
                      <div className="w-11 h-11 rounded overflow-hidden relative shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
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
    </section>
  );
};
