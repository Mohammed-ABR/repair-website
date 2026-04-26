import type { Metadata } from "next";

import { DienstenPage } from "@/components/diensten/diensten-page";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Onze Diensten",
  description: content.dienstenPageIntro,
};

export default function DienstenRoute() {
  return <DienstenPage />;
}
