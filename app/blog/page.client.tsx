"use client";

import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextAnimate } from "@/components/ui/text-animate";
import { blogTopics } from "@/lib/content/site";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export function BlogsPage() {
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
              animation="blurIn"
              by="word"
              startOnView
              once
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground"
            >
              Insights on Nigerian Logistics.
            </TextAnimate>
            <p className="text-base md:text-lg text-rideflow-text mt-4 leading-7">
              Practical thinking on logistics operations, technology, and
              building smarter supply chains in Nigeria, from the team at
              Rideflow.
            </p>
          </div>

          <div className="mt-16 max-w-3xl rounded-[24px] bg-white p-6 md:p-10">
            <TextAnimate
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
        </div>
      </section>
    </main>
  );
}
