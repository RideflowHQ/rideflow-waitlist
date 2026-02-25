import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Ride Flow - Manage your rides with ease",
  description: "Ride Flow - Manage your rides with ease",
  icons: {
    icon: "/favicon.ico",
  },
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
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body
        className={`${dmSans.variable} font-sans antialiased flex flex-col h-full`}
      >
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
