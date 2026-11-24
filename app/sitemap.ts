import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/site";

const routes: Array<
  [path: string, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number]
> = [
  ["", "weekly", 1],
  ["/move", "weekly", 0.95],
  ["/hub", "weekly", 0.9],
  ["/platform", "weekly", 0.9],
  ["/pricing", "monthly", 0.9],
  ["/about", "monthly", 0.9],
  ["/rider-sourcing", "monthly", 0.8],
  ["/riders", "monthly", 0.8],
  ["/contact", "monthly", 0.8],
  ["/blog", "monthly", 0.7],
  ["/privacy-policy", "yearly", 0.5],
  ["/terms-of-service", "yearly", 0.5],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
