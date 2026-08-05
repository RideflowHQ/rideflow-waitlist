import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  async redirects() {
    return [
      // /services is absorbed into /platform. Each service maps to the platform
      // category that now carries it, so inbound links land on relevant content
      // instead of the top of the page.
      { source: "/services", destination: "/platform", permanent: true },
      {
        source: "/services/asset-investment-hire-purchase",
        destination: "/platform#finance",
        permanent: true,
      },
      {
        source: "/services/fleet-asset-management",
        destination: "/platform#assets",
        permanent: true,
      },
      {
        source: "/services/rider-workforce-management",
        destination: "/platform#people",
        permanent: true,
      },
      {
        source: "/services/logistics-operations-management",
        destination: "/platform#operations",
        permanent: true,
      },
      {
        source: "/services/payments-payroll-installments",
        destination: "/platform#finance",
        permanent: true,
      },
      {
        source: "/services/reporting-insights-control-dashboard",
        destination: "/platform#finance",
        permanent: true,
      },
      // Catch any service slug added later or mistyped.
      { source: "/services/:slug", destination: "/platform", permanent: true },
      // The Hub keeps its SEO equity under a shorter, lane-neutral path.
      { source: "/logistics-hub", destination: "/hub", permanent: true },
    ];
  },
};

export default nextConfig;
