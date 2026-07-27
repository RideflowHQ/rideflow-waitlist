import { shouldShowSiteChrome } from "@/lib/tracking/host";

import { HideOnBrowserCustomDomain } from "../hide-on-browser-custom-domain";
import CustomCursorClient from "./custom-cursor-client";

export default async function CustomCursor() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return (
    <HideOnBrowserCustomDomain>
      <CustomCursorClient />
    </HideOnBrowserCustomDomain>
  );
}
