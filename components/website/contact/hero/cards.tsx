import Image from "next/image";
import React from "react";

const contactData = [
  {
    id: 1,
    icon: "/contact/PhoneCall.svg",
    alt: "Phone Call",
    title: "Phone",
    content: "+234 810 234 5678",
  },
  {
    id: 2,
    icon: "/contact/EnvelopeSimple.svg",
    alt: "Envelope",
    title: "Email",
    content: "info@rideflow.org",
  },
  {
    id: 3,
    icon: "/contact/MapPin.svg",
    alt: "Location",
    title: "Address",
    content:
      "EridanSpace, The Philippi Center, Oluwalogbon House, Plot A, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria",
  },
  {
    id: 4,
    icon: "/contact/Clock.svg",
    alt: "Clock",
    title: "Opening Hours",
    content: "Mon - Fri : 9:00 AM - 6:00 PM\nSat : 9:00 AM - 4:00 PM",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      {contactData.map((item) => (
        <div
          key={item.id}
          className="rounded-[20px] bg-white p-3 md:p-4 flex flex-col gap-6 md:gap-8"
        >
          <div className="rounded-full bg-rideflow-blue h-10 w-10 md:h-11 md:w-11 flex justify-center items-center">
            <Image src={item.icon} alt={item.alt} width={22} height={22} />
          </div>
          <div>
            <p className="font-medium text-lg md:text-[1.4rem]">{item.title}</p>
            <p className="text-sm sm:text-base md:text-lg text-rideflow-text whitespace-pre-line">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
