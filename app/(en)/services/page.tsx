import type { Metadata } from "next";

import { ServicesIndexPage } from "@/components/service-hub/services-index-page";
import { servicesIndexContent } from "@/content/service-hubs";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const { meta } = servicesIndexContent.en;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("services", "en"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: absoluteUrl(pathFor("services", "en")),
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function ServicesPage() {
  return <ServicesIndexPage locale="en" />;
}
