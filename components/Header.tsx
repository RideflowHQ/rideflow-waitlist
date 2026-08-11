"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { CALENDLY_URL, REGISTER_URL } from "@/lib/content/site";
import { isCustomDomainBrowser } from "@/lib/tracking/host";
import {
  DEFAULT_LANE,
  LANE_HOME,
  Lane,
  laneFromPathname,
  readLaneCookie,
  writeLaneCookie,
} from "@/lib/lane";

type NavLink = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavLink[] };

const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const runNav: NavItem[] = [
  // Platform is a single page, so it links straight through rather than opening a menu.
  { label: "Platform", href: "/platform" },
  {
    label: "Solutions",
    href: "/hub",
    children: [
      { label: "Rideflow Hub", href: "/hub" },
      { label: "Rider Sourcing", href: "/rider-sourcing" },
      { label: "For Riders", href: "/riders" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about", children: companyLinks },
];

const moveNav: NavItem[] = [
  { label: "How It Works", href: "/move#how-it-works" },
  { label: "Why Rideflow", href: "/move#why-rideflow" },
  { label: "Company", href: "/about", children: companyLinks },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  if (pathname.startsWith("/tracking") || isCustomDomainBrowser()) return null;

  const isPlatformActive = pathname.startsWith("/platform");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const pathLane = laneFromPathname(pathname);
  const [lane, setLane] = useState<Lane>(pathLane ?? DEFAULT_LANE);

  useEffect(() => {
    if (pathLane) {
      setLane(pathLane);
      writeLaneCookie(pathLane);
      return;
    }
    // Audience-neutral page: fall back to the choice made earlier this session.
    setLane(readLaneCookie() ?? DEFAULT_LANE);
  }, [pathLane]);

  const switchLane = (next: Lane) => {
    setLane(next);
    writeLaneCookie(next);
    setOpen(false);
    router.push(LANE_HOME[next]);
  };

  const navItems = lane === "move" ? moveNav : runNav;

  // In-page anchors are never "active" — every one of them shares the current
  // pathname, so matching on path alone underlined them all permanently.
  const isNavActive = (href: string) =>
    !href.includes("#") && pathname.startsWith(href);

  const laneSegment = (value: Lane, label: string) => (
    <button
      type="button"
      onClick={() => switchLane(value)}
      aria-pressed={lane === value}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
        lane === value
          ? "bg-white text-rideflow-text shadow-sm"
          : "text-rideflow-text-light hover:text-rideflow-text"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="w-full">
      <nav className="w-full container fixed top-5 z-20 left-[50%] transform -translate-x-1/2 px-6">
        <div className="flex justify-between items-center py-2 px-6 border-3 border-white bg-rideflow-gray-light rounded-2xl max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-5">
            <Link href={LANE_HOME[lane]} className="flex items-baseline gap-2">
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

            <div className="hidden lg:flex items-center gap-1 rounded-full border border-rideflow-hairline bg-rideflow-track p-1">
              {laneSegment("run", "Run logistics")}
              {laneSegment("move", "Move goods")}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = isNavActive(item.href);
              return (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-sm md:text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 transition-all duration-300 ${
                      isActive
                        ? "decoration-rideflow-blue"
                        : "decoration-transparent hover:decoration-rideflow-blue"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="size-4" />}
                  </Link>
                  {item.children && openMenu === item.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="min-w-52 rounded-xl border border-white bg-rideflow-gray-light p-2 shadow-lg">
                        {item.children.map((link) => (
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
              );
            })}

            {/* Same wrapper in both lanes so the gap after the last nav link and
                the CTA sizing stay identical when the switcher flips. */}
            <div className="flex items-center gap-3">
              {lane === "move" ? (
                <Button
                  asChild
                  className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer"
                >
                  <Link href="/move#claim">Claim your slot</Link>
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="px-4 py-2 font-semibold border-rideflow-blue text-rideflow-blue hover:bg-body-gray hover:text-rideflow-blue cursor-pointer"
                    onClick={() => window.open(REGISTER_URL, "_blank")}
                  >
                    Start for free
                  </Button>
                  <Button
                    className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer"
                    onClick={() => window.open(CALENDLY_URL, "_blank")}
                  >
                    Book a Demo
                  </Button>
                </>
              )}
            </div>
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
                <div className="flex items-center gap-1 rounded-full border border-rideflow-hairline bg-rideflow-track p-1 w-max">
                  {laneSegment("run", "Run logistics")}
                  {laneSegment("move", "Move goods")}
                </div>

                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-lg font-semibold text-rideflow-text2 underline decoration-2 underline-offset-4 ${
                        isNavActive(item.href)
                          ? "decoration-rideflow-blue"
                          : "decoration-transparent"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="mt-3 ml-3 flex flex-col gap-2">
                        {item.children.map((link) => (
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
                    )}
                  </div>
                ))}

                <div className="flex flex-col gap-3 mt-4">
                  {lane === "move" ? (
                    <Button
                      asChild
                      className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 w-full cursor-pointer"
                    >
                      <Link href="/move#claim" onClick={() => setOpen(false)}>
                        Claim your slot
                      </Link>
                    </Button>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
