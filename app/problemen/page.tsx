import type { Metadata } from "next";

import { ProblemenPage } from "@/components/problemen/problemen-page";

export const metadata: Metadata = {
  title: "Veelvoorkomende problemen",
  description:
    "Typische problemen met wasmachine, vaatwasser, droogkast, koelkast, oven en microgolf. Snelle diagnose en herstel in België.",
};

export default function ProblemenRoute() {
  return <ProblemenPage />;
}
