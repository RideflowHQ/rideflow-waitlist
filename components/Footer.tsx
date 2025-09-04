import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    id: 1,
    icon: "/twitter.svg",
    link: "www.facebook.com",
  },
  {
    id: 2,
    icon: "/facebook.svg",
    link: "www.facebook.com",
  },
  {
    id: 3,
    icon: "/instagram.svg",
    link: "www.facebook.com",
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
    <footer className="flex flex-col justify-between w-full items-center gap-12 py-12 relative">
      <div className="absolute top-0 left-0 w-full">
        <Image
          className="object-cover w-full"
          width={100}
          height={100}
          src={"/rideflow-footer.svg"}
          alt="footer"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between px-[2rem]  md:px-[15rem] w-full mt-6 md:mt-[6rem] ">
        <div className="flex flex-col  gap-6 w-full ">
          <div className="flex flex-col items-start gap-3">
            <Link href="/" className="flex items-baseline gap-2">
              <Image src="/logo.svg" alt="logo" width={120} height={120} />
            </Link>
            <span className="max-w-[14rem]  text-rideflow-text-light">
              Improve your business, Amplify Your Success.
            </span>
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
              <p className="text-lg text-rideflow-text-light font-bold">
                {quickLink.title}
              </p>
              <div className="flex flex-col gap-2">
                {quickLink.links.map((link, idx) => (
                  <Link
                    className="text-rideflow-text-light"
                    key={idx}
                    href={`#${link.link}`}
                  >
                    {link.linkTitle}
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
