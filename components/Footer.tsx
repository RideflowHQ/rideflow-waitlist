import { shouldShowSiteChrome } from "@/lib/tracking/host";

import { HideOnTrackingPath } from "./hide-on-tracking-path";
import FooterClient from "./footer-client";

export default async function Footer() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return (
    <HideOnTrackingPath>
      <FooterClient />
    </HideOnTrackingPath>
  );
}
