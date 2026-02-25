"use client";
import { PulsatingButton } from "./magicui/pulsating-button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const headerLinks = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="w-full">
      <nav className="w-full container fixed top-5 z-20 left-[50%] transform -translate-x-1/2 px-4">
        <div className="flex justify-between items-center py-2 px-4 border-3 border-white bg-rideflow-gray-light rounded-2xl max-w-screen-xl mx-auto w-full">
          <Link href="/" className="flex items-baseline gap-2">
            <Image
              className="object-contain"
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              priority
              sizes="(max-width: 768px) 80px, 100px"
            />
          </Link>
          <div className="flex items-center gap-8">
            {headerLinks.map((link) => {
              const isActive = pathname.includes(link.href);
              return (
                <Link
                  className={`text-sm md:text-lg font-semibold text-rideflow-text2 decoration-rideflow-blue ${
                    isActive ? "underline" : "underline-transparent"
                  } hover:underline transition-all duration-300`}
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <PulsatingButton
            pulseColor={"#2c4bfd"}
            className="bg-rideflow-blue rounded-2xl px-3 py-2 text-white font-semibold"
            onClick={() => {
              window.open("https://calendly.com/rideflow", "_blank");
            }}
          >
            Book a Demo
          </PulsatingButton>
        </div>
      </nav>
    </header>
  );
}
