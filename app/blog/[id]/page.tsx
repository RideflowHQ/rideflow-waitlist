import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BookingSection from "@/components/website/shared/booking";
import {
  type BlogPostDetail,
  formatBlogDate,
  getBlogPostBySlug,
  getBlogPosts,
} from "@/lib/blog";
import { BlogArticleContent } from "@/lib/blog-content";
import { SITE_URL } from "@/lib/content/site";
import { safeJsonLd } from "@/lib/utils";
import { BlogPostCard } from "../page.client";

function isCloudinaryUrl(url: string) {
  return url.startsWith("/") || url.includes("res.cloudinary.com");
}

function buildArticleSchema(post: BlogPostDetail) {
  const coverUrl = post.coverImage?.url;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    image: coverUrl ? [coverUrl] : [`${SITE_URL}/opengraph-image`],
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.authorName || "Rideflow Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Rideflow Limited",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
  };
}

function ArticleCover({ url, alt }: { url?: string; alt: string }) {
  if (!url) return null;

  return (
    <div className="relative mt-8 md:mt-10 aspect-video w-full overflow-hidden rounded-[24px] bg-body-gray">
      {isCloudinaryUrl(url) ? (
        <Image
          src={url}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      ) : (
        <img src={url} alt={alt} className="h-full w-full object-cover" />
      )}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPostBySlug(id);

  if (!post) {
    return {
      title: "Article Not Found - Rideflow",
      robots: { index: false, follow: false },
    };
  }

  const title = post.seo?.metaTitle?.trim() || `${post.title} - Rideflow`;
  const description =
    post.seo?.metaDescription?.trim() ||
    post.excerpt?.trim() ||
    "Insights on Nigerian logistics and delivery operations from Rideflow.";
  const ogImage =
    post.seo?.ogImageUrl?.trim() ||
    post.coverImage?.url?.trim() ||
    "/opengraph-image";
  const canonicalPath = `/blog/${encodeURIComponent(post.slug)}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "article",
      siteName: "Rideflow",
      title,
      description,
      url: canonicalPath,
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      authors: post.authorName ? [post.authorName] : undefined,
      tags: post.tags.length > 0 ? post.tags : undefined,
      images: [{ url: ogImage, alt: post.coverImage?.alt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@RideflowHQ",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPostBySlug(id);
  if (!post) notFound();

  // Renamed slugs still resolve upstream; permanently redirect old URLs to canonical slug.
  if (post.slug !== id) {
    permanentRedirect(`/blog/${encodeURIComponent(post.slug)}`);
  }

  const relatedList = await getBlogPosts({
    limit: 4,
    tag: post.tags[0] || undefined,
  });
  const related = relatedList.items
    .filter((item) => item.id !== post.id && item.slug !== post.slug)
    .slice(0, 2);

  const dateLabel = formatBlogDate(post.publishedAt);

  return (
    <main className="w-full flex flex-col relative bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(buildArticleSchema(post)) }}
      />

      <article className="relative pt-28 pb-16 md:pt-36 md:pb-24">
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

        <div className="container mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-rideflow-text-light hover:text-rideflow-blue"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-rideflow-text-light">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-md bg-body-gray px-2.5 py-1 text-xs font-semibold text-rideflow-text2 hover:text-rideflow-blue"
              >
                {tag}
              </Link>
            ))}
            {dateLabel && <span>{dateLabel}</span>}
            {post.readingTimeMinutes ? (
              <span>· {post.readingTimeMinutes} min read</span>
            ) : null}
            {post.authorName ? <span>· By {post.authorName}</span> : null}
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-rideflow-ink-hard">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-rideflow-text-light">
              {post.excerpt}
            </p>
          )}

          <ArticleCover
            url={post.coverImage?.url}
            alt={post.coverImage?.alt || post.title}
          />

          <div className="mt-10 md:mt-12 max-w-3xl">
            <BlogArticleContent
              content={post.content}
              contentFormat={post.contentFormat}
            />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-dashed border-[#808080] bg-body-gray py-14 md:py-20">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-rideflow-ink-hard">
              Related Articles
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {related.map((item) => (
                <BlogPostCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingSection />
    </main>
  );
}
