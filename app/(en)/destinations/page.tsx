import type { Metadata } from "next";
import { Anchor, Building2, Car, MapPin, Mountain, PlaneTakeoff, Route } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { destinationsHubContent } from "@/content/destinations-hub";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = destinationsHubContent.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("destinationsHub", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("destinationsHub", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function DestinationsHubPage() {
  return (
    <LocationPage
      pageKey="destinationsHub"
      locale="en"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: pathFor("services", "en") }}
    >
      <ServiceOverview content={content.intro} />
      <RelatedLinks eyebrow={content.cities.eyebrow} title={content.cities.title} items={content.cities.items.map((item) => ({ ...item, icon: Building2 }))} />
      <RelatedLinks eyebrow={content.destinations.eyebrow} title={content.destinations.title} items={content.destinations.items.map((item) => ({ ...item, icon: MapPin }))} />
      <RelatedLinks eyebrow={content.regions.eyebrow} title={content.regions.title} items={content.regions.items.map((item) => ({ ...item, icon: Mountain }))} />
      <RelatedLinks eyebrow={content.airports.eyebrow} title={content.airports.title} items={content.airports.items.map((item) => ({ ...item, icon: PlaneTakeoff }))} />
      <RelatedLinks eyebrow={content.ports.eyebrow} title={content.ports.title} items={content.ports.items.map((item) => ({ ...item, icon: Anchor }))} />
      <RelatedLinks eyebrow={content.routes.eyebrow} title={content.routes.title} items={content.routes.items.map((item) => ({ ...item, icon: Route }))} />
      <RelatedLinks eyebrow={content.services.eyebrow} title={content.services.title} items={content.services.items.map((item) => ({ ...item, icon: Car }))} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
