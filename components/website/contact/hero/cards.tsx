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
    content: "Placeholder - Insert company physical address here",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contactData.map((item) => (
        <div
          key={item.id}
          className="rounded-[20px] bg-white p-3 flex flex-col gap-8"
        >
          <div className="rounded-full bg-rideflow-blue h-11 w-11 flex justify-center items-center">
            <Image src={item.icon} alt={item.alt} width={22} height={22} />
          </div>
          <div>
            <p className="font-medium text-[1.4rem]">{item.title}</p>
            <p className="text-lg text-rideflow-text whitespace-pre-line">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
