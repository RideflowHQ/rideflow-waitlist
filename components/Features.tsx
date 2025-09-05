"use client";
import Image from "next/image";

const features = [
  {
    IconPath: "/user-group.svg",
    name: "Staff Management",
    description: "Manage drivers, dispatchers, and warehouse staff",
    bg: "#D9EBE1",
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3",
  },
  {
    IconPath: "/fleet.svg",
    name: "Fleet Tracking",
    description: "Real-time vehicle monitoring and route optimization",
    bg: "#F0E2FB",
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    IconPath: "/clock.svg",
    name: "Delivery Schedule",
    description: "Manage delivery timelines and dispatch",
    bg: "#F5D7D9",
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    IconPath: "/performance.svg",
    name: "Performance Metrics",
    description: "Track efficiency and operational insights.",
    bg: "#E4DDFB",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    IconPath: "/route.svg",
    name: "Route Planning",
    description: "Optimize delivery routes and fuel efficiency.",
    bg: "#F9E6D8",
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-2",
  },
  {
    IconPath: "/user.svg",
    name: "User Access Control",
    description: "Manage permissions and user roles.",
    bg: "#DBE0FB",
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-2 lg:col-end-4",
  },
];


export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#18191A] to-[#FFFFFF ]">
              {" "}
              Features
            </span>
          </h2>
          <p className="text-xl text-rideflow-text max-w-3xl mx-auto">
            Take control of your entire transportation business from a single
            dashboard. Easily manage your fleet, staff, and deliveries to
            streamline your operations.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 shadow-sm bg-gradient-to-tr from-[${feature.bg}] to-[#F8F9FB] ${feature.className}`}
              style={{ backgroundColor: `${feature.bg}` }}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg`}
              >
                <Image
                  src={feature.IconPath}
                  alt={feature.name}
                  width={30}
                  height={30}
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{feature.name}</h3>
              <p className="mt-2 text-sm font-semibold text-rideflow-text">
                {feature.description}
              </p>

              <Image
                src={"/logo-transparent.svg"}
                alt=""
                width={80}
                height={80}
                className="absolute bottom-0 opacity-70 right-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
