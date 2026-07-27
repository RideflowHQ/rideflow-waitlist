import { shouldShowSiteChrome } from "@/lib/tracking/host";

import { HideOnBrowserCustomDomain } from "./hide-on-browser-custom-domain";
import FooterClient from "./footer-client";

export default async function Footer() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return (
    <HideOnBrowserCustomDomain>
      <FooterClient />
    </HideOnBrowserCustomDomain>
  );
}
