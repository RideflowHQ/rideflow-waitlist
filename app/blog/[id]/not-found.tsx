import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostNotFound() {
  return (
    <main className="w-full flex flex-col relative bg-body-gray">
      <section className="container mx-auto max-w-2xl px-6 pt-36 pb-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-rideflow-ink-hard">
          Article not found
        </h1>
        <p className="mt-3 text-base leading-7 text-rideflow-text-light">
          This post may have been moved, unpublished, or removed.
        </p>
        <Button
          asChild
          className="mt-7 bg-rideflow-blue text-white hover:bg-blue-700"
        >
          <Link href="/blog">Back to Blog →</Link>
        </Button>
      </section>
    </main>
  );
}
