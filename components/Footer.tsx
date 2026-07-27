import { shouldShowSiteChrome } from "@/lib/tracking/host";

import FooterClient from "./footer-client";

export default async function Footer() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return <FooterClient />;
}
