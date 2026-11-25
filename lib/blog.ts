import { cache } from "react";

export type BlogCoverImage = {
  url: string;
  alt?: string | null;
} | null;

export type BlogPostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  coverImage: BlogCoverImage;
  tags: string[];
  authorName?: string | null;
  featured: boolean;
  readingTimeMinutes?: number | null;
  publishedAt: string | null;
  updatedAt: string;
};

export type BlogPostSeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImageUrl?: string | null;
} | null;

export type BlogPostDetail = BlogPostSummary & {
  content: unknown;
  contentFormat?: string | null;
  seo?: BlogPostSeo;
};

export type BlogPostList = {
  items: BlogPostSummary[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type BlogTag = {
  key: string;
  name: string;
  count: number;
};

function blogApiOrigin(): string {
  const base =
    process.env.RIDEFLOW_API_BASE ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  return base.replace(/\/+$/, "").replace(/\/api$/, "");
}

async function blogGet<T>(path: string): Promise<T | null> {
  const origin = blogApiOrigin();
  if (!origin) return null;

  try {
    const res = await fetch(`${origin}/api/public/blog${path}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;

    const json = (await res.json()) as { data?: T } | null;
    return json && typeof json === "object" && "data" in json
      ? (json.data ?? null)
      : null;
  } catch {
    return null;
  }
}

export async function getBlogPosts(params?: {
  page?: number;
  limit?: number;
  tag?: string;
  search?: string;
  featured?: boolean;
}): Promise<BlogPostList> {
  const page = Math.min(1000, Math.max(1, Math.floor(params?.page || 1)));
  const limit = Math.min(50, Math.max(1, Math.floor(params?.limit || 12)));
  const qs = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (params?.tag?.trim()) qs.set("tag", params.tag.trim());
  if (params?.search?.trim()) qs.set("search", params.search.trim());
  if (typeof params?.featured === "boolean") {
    qs.set("featured", String(params.featured));
  }

  const data = await blogGet<BlogPostList>(`/posts?${qs.toString()}`);
  return (
    data ?? {
      items: [],
      page,
      limit,
      total: 0,
      totalPages: 0,
    }
  );
}

export const getBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPostDetail | null> => {
    const clean = slug.trim();
    if (!clean) return null;
    return blogGet<BlogPostDetail>(`/posts/${encodeURIComponent(clean)}`);
  },
);

export async function getBlogTags(): Promise<BlogTag[]> {
  return (await blogGet<BlogTag[]>("/tags")) ?? [];
}

export function formatBlogDate(iso: string | null | undefined): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
