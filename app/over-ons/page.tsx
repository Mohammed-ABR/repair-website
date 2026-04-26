import type { Metadata } from "next";

import { OverOnsPage } from "@/components/over-ons/over-ons-page";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Over Ons",
  description: content.overOnsPageIntro,
};

export default function OverOnsRoute() {
  return <OverOnsPage />;
}
