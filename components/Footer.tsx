import Link from "next/link";
import Image from "next/image";
import { TextAnimate } from "./ui/text-animate";
import { motion } from "motion/react";

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
    title: "Navigation",
    links: [
      { linkTitle: "Home", link: "#" },
      { linkTitle: "Rentals", link: "#" },
      { linkTitle: "Contact", link: "#" },
      { linkTitle: "FAQ", link: "#" },
    ],
  },
  {
    id: 2,
    title: "About",
    links: [
      { linkTitle: "Our Company", link: "#" },
      { linkTitle: "Investors Relation", link: "#" },
      { linkTitle: "Social Impacts", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      { linkTitle: "Privacy Policy", link: "#" },
      { linkTitle: "Terms of Service", link: "#" },
      { linkTitle: "Cookie Policy", link: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col justify-between w-full items-center gap-12 py-12 relative bg-white">
      <motion.div
        transition={{ duration: 2.5, ease: "easeInOut" }}
        whileInView={{ opacity: [0, 1] }}
        viewport={{once:true}}
        className="absolute top-0 left-0 w-full"
      >
        <Image
          className="object-cover w-full"
          width={100}
          height={100}
          src={"/rideflow-footer.svg"}
          alt="footer"
        />
      </motion.div>
      <div className="flex flex-col md:flex-row gap-10 justify-between px-[2rem]  md:px-[15rem] w-full mt-6 md:mt-[6rem] ">
        <div className="flex flex-col  gap-6 w-full ">
          <div className="flex flex-col items-start gap-3">
            <Link href="/" className="flex items-baseline gap-2">
              <Image src="/logo.svg" alt="logo" width={120} height={120} />
            </Link>
            <TextAnimate
              animation="blurIn"
              by="word"
              startOnView
              once
              className="max-w-[14rem]  text-rideflow-text-light"
            >
              Improve your business, Amplify Your Success.
            </TextAnimate>
          </div>

          <div className="flex gap-6 text-sm">
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

        <div className="flex flex-wrap justify-between items-start gap-4 w-full max-w-4xl">
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
                    href={`#${link.link}`}
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

      <div className="text-center w-full border-rideflow-text2">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RIDE FLOW. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
