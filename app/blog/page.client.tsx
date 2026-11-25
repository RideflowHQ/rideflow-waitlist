"use client";

import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  type BlogPostList,
  type BlogPostSummary,
  type BlogTag,
  formatBlogDate,
} from "@/lib/blog";
import { blogTopics } from "@/lib/content/site";
import { ArrowRight, Loader2, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

function isCloudinaryUrl(url: string) {
  return url.startsWith("/") || url.includes("res.cloudinary.com");
}

function buildBlogHref(params: {
  page?: number;
  tag?: string;
  search?: string;
}) {
  const qs = new URLSearchParams();
  if (params.tag) qs.set("tag", params.tag);
  if (params.search) qs.set("search", params.search);
  if (params.page && params.page > 1) qs.set("page", String(params.page));
  const query = qs.toString();
  return query ? `/blog?${query}` : "/blog";
}

function CardCover({ url, alt }: { url?: string; alt: string }) {
  if (!url) {
    return (
      <div className="flex h-full w-full items-end bg-gradient-to-br from-[#0A0F1D] via-[#101E42] to-rideflow-blue p-4">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
          Rideflow Journal
        </span>
      </div>
    );
  }

  if (isCloudinaryUrl(url)) {
    return (
      <Image
        src={url}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 280px"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
    />
  );
}

export function BlogPostCard({ post }: { post: BlogPostSummary }) {
  const dateLabel = formatBlogDate(post.publishedAt);
  const firstTag = post.tags[0];

  return (
    <Link
      href={`/blog/${encodeURIComponent(post.slug)}`}
      className="group flex flex-col sm:flex-row gap-4 rounded-[20px] bg-white p-3.5 transition-shadow hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
    >
      <div className="relative aspect-video sm:w-[44%] sm:shrink-0 overflow-hidden rounded-2xl bg-rideflow-ink-hard">
        <CardCover
          url={post.coverImage?.url}
          alt={post.coverImage?.alt || post.title}
        />
        {post.featured && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-rideflow-blue px-2.5 py-1 text-[11px] font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between py-1.5 pr-1">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-rideflow-text-light">
            {firstTag && (
              <span className="rounded-md bg-body-gray px-2 py-0.5 font-medium text-rideflow-text2">
                {firstTag}
              </span>
            )}
            {dateLabel && <span>{dateLabel}</span>}
            {post.readingTimeMinutes ? (
              <span>· {post.readingTimeMinutes} min read</span>
            ) : null}
          </div>

          <h2 className="mt-2.5 line-clamp-2 text-lg font-semibold leading-snug text-rideflow-ink-hard group-hover:text-rideflow-blue">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-rideflow-text-light">
              {post.excerpt}
            </p>
          )}
        </div>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-rideflow-ink-hard">
          <span className="underline underline-offset-4">Read article</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </Link>
  );
}

function BlogComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/blog-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed");

      toast.success("You're on the list. We'll notify you when we publish.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="mt-16 max-w-3xl rounded-[24px] bg-white p-6 md:p-10">
        <TextAnimate
          as="h2"
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-2xl sm:text-3xl font-medium"
        >
          We&apos;re Working on Our First Posts.
        </TextAnimate>
        <p className="mt-4 text-rideflow-text-light leading-7">
          We&apos;ll be writing about the things that actually matter to
          logistics operators — operational efficiency, fleet management,
          compliance, scaling a logistics business in Nigeria, and the
          technology making it all possible.
        </p>
        <p className="mt-4 text-rideflow-text-light">
          Be the first to know when we publish.
        </p>
        <form
          onSubmit={handleNotify}
          className="mt-6 flex flex-col sm:flex-row gap-3"
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-rideflow-blue text-white hover:bg-blue-700"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Notify Me →"}
          </Button>
        </form>
      </div>

      <div className="mt-16">
        <TextAnimate
          as="h2"
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-2xl sm:text-3xl font-medium"
        >
          What We&apos;ll Be Writing About.
        </TextAnimate>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogTopics.map((topic) => (
            <div
              key={topic}
              className="rounded-[20px] bg-white p-6 text-lg font-medium text-rideflow-text"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function BlogFilterBar({
  tags,
  activeTag,
  searchQuery,
}: {
  tags: BlogTag[];
  activeTag: string;
  searchQuery: string;
}) {
  const normalizedActive = activeTag.toLowerCase();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {tags.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={buildBlogHref({ search: searchQuery || undefined })}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              !activeTag
                ? "bg-rideflow-blue text-white"
                : "bg-white text-rideflow-text2 hover:text-rideflow-blue"
            }`}
          >
            All
          </Link>
          {tags.map((tag) => {
            const selected =
              normalizedActive === tag.key.toLowerCase() ||
              normalizedActive === tag.name.toLowerCase();
            return (
              <Link
                key={tag.key}
                href={buildBlogHref({
                  tag: tag.key,
                  search: searchQuery || undefined,
                })}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-rideflow-blue text-white"
                    : "bg-white text-rideflow-text2 hover:text-rideflow-blue"
                }`}
              >
                {tag.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <div />
      )}

      <form
        method="GET"
        action="/blog"
        className="flex w-full md:w-80 items-center gap-2"
      >
        {activeTag && <input type="hidden" name="tag" value={activeTag} />}
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-rideflow-text-light" />
          <Input
            type="search"
            name="search"
            defaultValue={searchQuery}
            placeholder="Search articles..."
            className="bg-white pl-9"
          />
        </div>
        <Button
          type="submit"
          className="bg-rideflow-blue text-white hover:bg-blue-700"
        >
          Search
        </Button>
      </form>
    </div>
  );
}

function BlogPagination({
  page,
  totalPages,
  activeTag,
  searchQuery,
}: {
  page: number;
  totalPages: number;
  activeTag: string;
  searchQuery: string;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      {page > 1 && (
        <Button
          asChild
          variant="outline"
          className="bg-white border-rideflow-hairline"
        >
          <Link
            href={buildBlogHref({
              page: page - 1,
              tag: activeTag || undefined,
              search: searchQuery || undefined,
            })}
          >
            ← Previous
          </Link>
        </Button>
      )}

      <span className="text-sm text-rideflow-text-light">
        Page {page} of {totalPages}
      </span>

      {page < totalPages && (
        <Button
          asChild
          variant="outline"
          className="bg-white border-rideflow-hairline"
        >
          <Link
            href={buildBlogHref({
              page: page + 1,
              tag: activeTag || undefined,
              search: searchQuery || undefined,
            })}
          >
            Next →
          </Link>
        </Button>
      )}
    </div>
  );
}

export function BlogsPage({
  postsData,
  tags,
  activeTag,
  searchQuery,
}: {
  postsData: BlogPostList;
  tags: BlogTag[];
  activeTag: string;
  searchQuery: string;
}) {
  const showComingSoon =
    postsData.total === 0 && !activeTag && !searchQuery;

  return (
    <main className="w-full flex flex-col relative">
      <section className="py-12 md:py-18 min-h-screen relative bg-body-gray">
        <Image
          src="/home/blog-curve-right.svg"
          alt="curve"
          height={250}
          width={250}
          className="absolute top-0 right-0 -z-5 hidden md:block"
        />
        <Image
          src="/home/blog-curve-left.svg"
          alt="curve"
          height={250}
          width={250}
          className="absolute top-0 left-0 -z-5 hidden md:block"
        />
        <div className="container mx-auto px-6 pt-28 md:pt-32">
          <div className="max-w-3xl">
            <Badge text="Blog" color="bg-white" />
            <TextAnimate
              as="h1"
              animation="blurIn"
              by="word"
              startOnView
              once
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground"
            >
              Insights on Nigerian Logistics.
            </TextAnimate>
            <p className="text-base md:text-lg text-rideflow-text mt-4 leading-7">
              Practical thinking on logistics operations, dispatch riders,
              technology, and building smarter supply chains in Nigeria, from
              the team at Rideflow.
            </p>
          </div>

          {showComingSoon ? (
            <BlogComingSoon />
          ) : (
            <div className="mt-12">
              <BlogFilterBar
                tags={tags}
                activeTag={activeTag}
                searchQuery={searchQuery}
              />

              {postsData.items.length === 0 ? (
                <div className="mt-10 rounded-[24px] bg-white p-8 text-center">
                  <h2 className="text-xl font-semibold text-rideflow-ink-hard">
                    No matching articles found
                  </h2>
                  <p className="mt-2 text-rideflow-text-light">
                    Try clearing your search or selecting a different topic.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 border-rideflow-blue text-rideflow-blue"
                  >
                    <Link href="/blog">View all articles</Link>
                  </Button>
                </div>
              ) : (
                <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {postsData.items.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              )}

              <BlogPagination
                page={postsData.page}
                totalPages={postsData.totalPages}
                activeTag={activeTag}
                searchQuery={searchQuery}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
