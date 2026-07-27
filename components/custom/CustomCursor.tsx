import { shouldShowSiteChrome } from "@/lib/tracking/host";

import CustomCursorClient from "./custom-cursor-client";

export default async function CustomCursor() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return <CustomCursorClient />;
}
