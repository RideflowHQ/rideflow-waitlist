"use client";
import { cn } from "@/lib/utils";
import { PulsatingButton } from "./magicui/pulsating-button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const headerLinks = [
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "  Contact Us  ",
      href: "#contact",
    },
  ];
  return (
    <header className="flex z-20 backdrop-blur-md sticky top-4 justify-between items-center py-2 px-4 border-3 border-white bg-rideflow-gray-light rounded-2xl">
      <Link href="/" className="flex items-baseline gap-2">
        <Image src="/logo.svg" alt="logo" width={120} height={120} />
      </Link>
      <div className="flex items-center gap-4">
        {headerLinks.map((link) => (
          <Link
            className="text-lg font-semibold text-rideflow-text2"
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <PulsatingButton
          pulseColor={"#2c4bfd"}
          className="bg-rideflow-blue rounded-2xl px-3 py-2 text-white font-semibold"
        >
          Coming Soon
        </PulsatingButton>
      </div>
    </header>
  );
}
