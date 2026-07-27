import { shouldShowSiteChrome } from "@/lib/tracking/host";

import HeaderClient from "./header-client";

export default async function Header() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return <HeaderClient />;
}
