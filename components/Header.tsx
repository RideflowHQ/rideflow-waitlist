"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { CALENDLY_URL, REGISTER_URL } from "@/lib/content/site";

const platformLinks = [
  { label: "Features", href: "/platform#features" },
  { label: "How It Works", href: "/platform#how-it-works" },
];

const headerLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Logistics Hub", href: "/logistics-hub" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  const isPlatformActive = pathname.startsWith("/platform");

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

          <div className="hidden lg:flex items-center gap-8">
            <div
              className="group relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <Link
                href="/platform"
                className={`inline-flex items-center gap-1 text-sm md:text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 transition-all duration-300 ${
                  isPlatformActive
                    ? "decoration-rideflow-blue"
                    : "decoration-transparent hover:decoration-rideflow-blue"
                }`}
              >
                Platform
                <ChevronDown className="size-4" />
              </Link>
              {platformOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="min-w-44 rounded-xl border border-white bg-rideflow-gray-light p-2 shadow-lg">
                    {platformLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-rideflow-text2 hover:bg-white hover:text-rideflow-blue"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {headerLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  className={`text-sm md:text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 transition-all duration-300 ${
                    isActive
                      ? "decoration-rideflow-blue"
                      : "decoration-transparent hover:decoration-rideflow-blue"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="px-4 py-2 font-semibold border-rideflow-blue text-rideflow-blue hover:bg-body-gray hover:text-rideflow-blue cursor-pointer"
              onClick={() => window.open(REGISTER_URL, "_blank")}
            >
              Start for free
            </Button>
            <Button
              className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer w-full md:w-max"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Book a Demo
            </Button>
          </div>

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
                <div>
                  <Link
                    href="/platform"
                    onClick={() => setOpen(false)}
                    className={`text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 ${
                      pathname.startsWith("/platform")
                        ? "decoration-rideflow-blue"
                        : "decoration-transparent"
                    }`}
                  >
                    Platform
                  </Link>
                  <div className="mt-3 ml-3 flex flex-col gap-2">
                    {platformLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-rideflow-text-light hover:text-rideflow-blue"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {headerLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 transition-all duration-300 ${
                        isActive
                          ? "decoration-rideflow-blue"
                          : "decoration-transparent hover:decoration-rideflow-blue"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="cursor-pointer px-4 py-2 font-semibold border-rideflow-blue text-rideflow-blue hover:bg-rideflow-blue hover:text-white w-full"
                    onClick={() => {
                      window.open(REGISTER_URL, "_blank");
                      setOpen(false);
                    }}
                  >
                    Start for free
                  </Button>
                  <Button
                    className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 w-full cursor-pointer"
                    onClick={() => {
                      window.open(CALENDLY_URL, "_blank");
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
