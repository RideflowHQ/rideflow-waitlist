import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import CustomCursor from "@/components/custom/CustomCursor";
import dynamic from "next/dynamic";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Rideflow - Streamline your Logistics",
  description:
    "Rideflow is a logistics operations platform that helps businesses manage riders, drivers, fleets, and delivery workflows from a centralized system.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "logistics operations platform",
    "fleet management",
    "driver management",
    "rider management",
    "delivery workflow",
    "logistics software",
    "dispatch management",
    "transportation management",
  ],
  other: {
    "dns-prefetch": "https://calendly.com",
  },
};

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-12" />,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rideflow Limited",
    alternateName: "Rideflow",
    url: "https://rideflow.org",
    logo: "https://rideflow.org/logo.png",
    description:
      "Rideflow Limited is a logistics operations and fleet management platform that helps logistics and delivery businesses manage riders, drivers, vehicles, staff, and operational workflows from one centralized system.",
    email: "info@rideflow.org",
    sameAs: [
      "https://www.linkedin.com/company/rideflowlimited/",
      "https://x.com/RideflowHQ",
      "https://www.instagram.com/rideflowhq/",
      "https://www.facebook.com/share/17JCxxuneN/?mibextid=wwXIfr",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@rideflow.org",
      contactType: "customer service",
      availableLanguage: ["en"],
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rideflow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Logistics operations platform for managing riders, drivers, fleets, and delivery workflows",
  };

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} font-sans antialiased flex flex-col h-full cursor-none`}
      >
        <CustomCursor />
        <Toaster />
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
