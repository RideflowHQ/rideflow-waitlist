import { shouldShowSiteChrome } from "@/lib/tracking/host";

import { HideOnTrackingPath } from "./hide-on-tracking-path";
import HeaderClient from "./header-client";

export default async function Header() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return (
    <HideOnTrackingPath>
      <HeaderClient />
    </HideOnTrackingPath>
  );
}
