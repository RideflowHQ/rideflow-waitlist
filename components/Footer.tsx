"use client";
import Link from "next/link";
import Image from "next/image";
import { TextAnimate } from "./ui/text-animate";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

const socials = [
  {
    id: 1,
    icon: "/twitter.svg",
    link: "https://x.com/RideflowHQ",
  },
  {
    id: 2,
    icon: "/facebook.svg",
    link: "https://www.facebook.com/share/17JCxxuneN/?mibextid=wwXIfr",
  },
  {
    id: 3,
    icon: "/instagram.svg",
    link: "https://www.instagram.com/rideflowhq/",
  },
  {
    id: 4,
    icon: "/download.svg",
    link: "https://www.linkedin.com/company/rideflowlimited/",
  },
];

const footerQuickLink = [
  {
    id: 1,
    title: "Company",
    links: [
      { linkTitle: "About", link: "/about" },
      { linkTitle: "Services", link: "/services" },
      { linkTitle: "Testimonials", link: "/" },
      { linkTitle: "Blog", link: "/blog" },
      { linkTitle: "Contact", link: "/contact" },
    ],
  },
  {
    id: 2,
    title: "Legal",
    links: [
      { linkTitle: "Terms of Service", link: "/" },
      { linkTitle: "Privacy Policy", link: "/" },
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
                Manage orders, drivers, fleets and operational costs with
                clarity and control — all in one place.
              </TextAnimate>
              <div className="flex gap-6 text-sm pt-4">
                {socials.map((social) => (
                  <Link target="_blank" key={social.id} href={social.link}>
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
              <p className="text-rideflow-text-light">RC 1200124</p>
              <p className="text-rideflow-text-light">
                {" "}
                <Mail className="inline-block mr-1" size={16} />{" "}
                info@rideflow.org
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-row pl-0 lg:pl-10 gap-30 sm:gap-24 lg:gap-60 pr-4 sm:pr-0">
            {footerQuickLink.map((quickLink, idx) => (
              <div className="flex flex-col gap-2" key={quickLink.id}>
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  startOnView
                  once
                  className="text-lg text-rideflow-text-light font-bold"
                >
                  {quickLink.title}
                </TextAnimate>
                <div className="flex flex-col gap-2">
                  {quickLink.links.map((link, idx) => (
                    <Link
                      className="text-rideflow-text-light"
                      key={idx}
                      href={`${link.link}`}
                    >
                      <TextAnimate
                        animation="blurInUp"
                        by="word"
                        startOnView
                        once
                      >
                        {link.linkTitle}
                      </TextAnimate>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-rideflow-text2 border-b border-t border-dashed py-7">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RIDE FLOW. All rights reserved.
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
