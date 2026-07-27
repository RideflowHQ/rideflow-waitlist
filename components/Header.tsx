import { shouldShowSiteChrome } from "@/lib/tracking/host";

import { HideOnBrowserCustomDomain } from "./hide-on-browser-custom-domain";
import HeaderClient from "./header-client";

export default async function Header() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return (
    <HideOnBrowserCustomDomain>
      <HeaderClient />
    </HideOnBrowserCustomDomain>
  );
}
