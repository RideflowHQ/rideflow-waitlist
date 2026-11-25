import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
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
  ["/blog", "weekly", 0.8],
  ["/privacy-policy", "yearly", 0.5],
  ["/terms-of-service", "yearly", 0.5],
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const staticEntries: MetadataRoute.Sitemap = routes.map(
    ([path, changeFrequency, priority]) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  const posts = await getBlogPosts({ page: 1, limit: 50 });
  const blogEntries: MetadataRoute.Sitemap = posts.items.map((post) => ({
    url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || lastModified),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
