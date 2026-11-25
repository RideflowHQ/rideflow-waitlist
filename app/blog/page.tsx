import { Metadata } from "next";
import { getBlogPosts, getBlogTags } from "@/lib/blog";
import { BlogsPage } from "./page.client";

export const metadata: Metadata = {
  title: "Blog - Rideflow",
  description:
    "Insights on Nigerian logistics operations, dispatch riders, and building smarter supply chains from the Rideflow team.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; tag?: string; search?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const activeTag = params.tag?.trim() || "";
  const searchQuery = params.search?.trim() || "";

  const [postsData, tags] = await Promise.all([
    getBlogPosts({
      page,
      limit: 12,
      tag: activeTag || undefined,
      search: searchQuery || undefined,
    }),
    getBlogTags(),
  ]);

  return (
    <BlogsPage
      postsData={postsData}
      tags={tags}
      activeTag={activeTag}
      searchQuery={searchQuery}
    />
  );
}
