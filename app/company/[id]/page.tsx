import { redirect } from "next/navigation";

export default function CompanyFallback() {
  redirect("/move?from=app");
}
