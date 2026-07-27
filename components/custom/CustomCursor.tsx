import { shouldShowSiteChrome } from "@/lib/tracking/host";

import { HideOnTrackingPath } from "../hide-on-tracking-path";
import CustomCursorClient from "./custom-cursor-client";

export default async function CustomCursor() {
  if (!(await shouldShowSiteChrome())) {
    return null;
  }

  return (
    <HideOnTrackingPath>
      <CustomCursorClient />
    </HideOnTrackingPath>
  );
}
