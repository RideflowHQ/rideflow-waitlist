import { BlogsPage } from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Rideflow",
  description:
    "Insights on Nigerian logistics operations, technology, and building smarter supply chains from the team at Rideflow.",
};

export default function BlogPage() {
  return <BlogsPage />;
}
