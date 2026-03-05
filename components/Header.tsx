"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const headerLinks = [
    {
      label: "About",
      href: "/about",
      comingSoon: false,
    },
    {
      label: "Services",
      href: "/services",
      comingSoon: false,
    },
    {
      label: "Blog",
      href: "/blog",
      comingSoon: true,
    },
    {
      label: "Contact",
      href: "/contact",
      comingSoon: false,
    },
  ];

  return (
    <header className="w-full">
      <nav className="w-full container fixed top-5 z-20 left-[50%] transform -translate-x-1/2 px-6">
        <div className="flex justify-between items-center py-2 px-6 border-3 border-white bg-rideflow-gray-light rounded-2xl max-w-7xl mx-auto w-full">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {headerLinks.map((link) => {
              const isActive = pathname.includes(link.href);
              return (
                <div key={link.href} className="relative">
                  <Link
                    className={`text-sm md:text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 transition-all duration-300 ${
                      isActive
                        ? "decoration-rideflow-blue"
                        : "decoration-transparent hover:decoration-rideflow-blue"
                    } ${link.comingSoon ? "cursor-not-allowed opacity-60" : ""}`}
                    href={link.comingSoon ? "#" : link.href}
                    onClick={(e) => {
                      if (link.comingSoon) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.comingSoon && (
                    <span className="absolute -bottom-2 -right-7 bg-rideflow-blue -rotate-15 text-white text-[8px] px-2 py-0.5 rounded-full whitespace-nowrap font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="px-4 py-2 font-semibold border-rideflow-blue text-rideflow-blue hover:bg-body-gray hover:text-rideflow-blue cursor-pointer"
              onClick={() => {
                window.open(
                  "https://dashboard.rideflow.org/auth/login",
                  "_blank",
                );
              }}
            >
              Sign In
            </Button>
            <Button
              className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer w-full md:w-max"
              onClick={() => {
                window.open("https://calendly.com/rideflow", "_blank");
              }}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="bg-rideflow-blue text-white hover:bg-blue-700 hover:text-white"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100 p-5">
              <nav className="flex flex-col gap-6 mt-8">
                {headerLinks.map((link) => {
                  const isActive = pathname.includes(link.href);
                  return (
                    <div key={link.href} className="relative">
                      <Link
                        href={link.comingSoon ? "#" : link.href}
                        onClick={(e) => {
                          if (link.comingSoon) {
                            e.preventDefault();
                          } else {
                            setOpen(false);
                          }
                        }}
                        className={`text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 transition-all duration-300 ${
                          isActive
                            ? "decoration-rideflow-blue"
                            : "decoration-transparent hover:decoration-rideflow-blue"
                        } ${link.comingSoon ? "cursor-not-allowed opacity-60" : ""}`}
                      >
                        {link.label}
                      </Link>
                      {link.comingSoon && (
                        <span className="absolute -top-1 left-14 bg-rideflow-blue text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  );
                })}
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="cursor-pointer px-4 py-2 font-semibold border-rideflow-blue text-rideflow-blue hover:bg-rideflow-blue hover:text-white w-full"
                    onClick={() => {
                      window.open(
                        "https://dashboard.rideflow.org/auth/login",
                        "_blank",
                      );
                      setOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 w-full cursor-pointer"
                    onClick={() => {
                      window.open("https://calendly.com/rideflow", "_blank");
                      setOpen(false);
                    }}
                  >
                    Book a Demo
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
