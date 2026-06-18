"use client";
import Link from "next/link";
import Image from "next/image";
import { TextAnimate } from "./ui/text-animate";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/content/site";

const socials = [
  {
    id: 1,
    icon: "/blue-linkedin.svg",
    link: "https://www.linkedin.com/company/rideflowlimited/",
  },
  {
    id: 2,
    icon: "/blue-x.svg",
    link: "https://x.com/RideflowHQ",
  },
  {
    id: 3,
    icon: "/blue-instagram.svg",
    link: "https://www.instagram.com/rideflowhq/",
  },
  {
    id: 4,
    icon: "/blue-facebook.svg",
    link: "https://www.facebook.com/share/17JCxxuneN/?mibextid=wwXIfr",
  },
];

type FooterLink = {
  linkTitle: string;
  link: string;
  external?: boolean;
};

const footerColumns: { id: number; title: string; links: FooterLink[] }[] = [
  {
    id: 1,
    title: "Product",
    links: [
      { linkTitle: "Features", link: "/platform#features" },
      { linkTitle: "Pricing", link: "/pricing" },
      { linkTitle: "How It Works", link: "/platform#how-it-works" },
      { linkTitle: "Book a Demo", link: CALENDLY_URL, external: true },
    ],
  },
  {
    id: 2,
    title: "Company",
    links: [
      { linkTitle: "About", link: "/about" },
      { linkTitle: "Blog", link: "/blog" },
      { linkTitle: "Contact", link: "/contact" },
    ],
  },
  {
    id: 3,
    title: "Logistics Hub",
    links: [
      { linkTitle: "Join the Hub", link: "/logistics-hub#join" },
      { linkTitle: "Hub FAQ", link: "/logistics-hub#trust" },
    ],
  },
  {
    id: 4,
    title: "Legal",
    links: [
      { linkTitle: "Terms of Service", link: "/terms-of-service" },
      { linkTitle: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-12 relative bg-white border-t border-dashed border-[#808080]"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row py-12 gap-8 lg:gap-0">
          <div className="flex flex-col gap-7 flex-1">
            <div className="flex flex-col items-start gap-3">
              <Link href="/" className="flex items-baseline gap-2">
                <Image src="/logo.svg" alt="logo" width={120} height={120} />
              </Link>
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="w-full lg:w-[65%] text-rideflow-text-light"
              >
                Manage orders, drivers, fleets and operational costs with clarity
                and control — all in one place.
              </TextAnimate>
              <div className="flex gap-5 text-sm pt-4">
                {socials.map((social) => (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.id}
                    href={social.link}
                  >
                    <Image
                      src={social.icon}
                      width={30}
                      height={30}
                      className="object-contain size-5"
                      alt="socials"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-rideflow-text-light">RC 8742605</p>
              <p className="text-rideflow-text-light">
                <Mail className="inline-block mr-1" size={16} /> {CONTACT_EMAIL}
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:pl-10">
            {footerColumns.map((column) => (
              <div className="flex flex-col gap-2" key={column.id}>
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  startOnView
                  once
                  className="text-lg text-rideflow-text-light font-bold"
                >
                  {column.title}
                </TextAnimate>
                <div className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <div key={link.linkTitle} className="group relative inline-block w-fit">
                      {link.external ? (
                        <a
                          className="text-rideflow-text-light"
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TextAnimate
                            animation="blurInUp"
                            by="word"
                            startOnView
                            once
                          >
                            {link.linkTitle}
                          </TextAnimate>
                        </a>
                      ) : (
                        <Link className="text-rideflow-text-light" href={link.link}>
                          <TextAnimate
                            animation="blurInUp"
                            by="word"
                            startOnView
                            once
                          >
                            {link.linkTitle}
                          </TextAnimate>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-rideflow-text2 border-b border-t border-dashed py-7">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rideflow. All rights reserved.
          </p>
        </div>
      </div>

      <motion.div
        transition={{ duration: 2.5, ease: "easeInOut" }}
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: true }}
        className="w-full py-15"
      >
        <Image
          className="object-cover w-full"
          width={100}
          height={100}
          src={"/rideflow-footer.svg"}
          alt="footer"
        />
      </motion.div>
    </footer>
  );
}
