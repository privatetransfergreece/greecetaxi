import type { Metadata } from "next";
import { Anchor, Car, Landmark, PlaneTakeoff, Route, Users } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { regionContent } from "@/content/regions-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = regionContent.regionPeloponnese.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("regionPeloponnese", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("regionPeloponnese", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function PeloponneseRegionPage() {
  const quoteHref = pathFor("getQuote", "en");

  return (
    <LocationPage
      pageKey="regionPeloponnese"
      locale="en"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Destinations", href: pathFor("destinationsHub", "en") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      extraSchema={[{ "@context": "https://schema.org", "@type": "TouristDestination", name: "Peloponnese", description: meta.description }]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.intro} />
      <RelatedLinks eyebrow={content.airports.eyebrow} title={content.airports.title} items={content.airports.items.map((item, i) => ({ ...item, icon: [PlaneTakeoff][i] }))} />
      <RelatedLinks eyebrow={content.ports.eyebrow} title={content.ports.title} items={content.ports.items.map((item, i) => ({ ...item, icon: [Anchor][i] }))} />
      <RelatedLinks eyebrow={content.cities.eyebrow} title={content.cities.title} items={content.cities.items.map((item, i) => ({ ...item, icon: [Route, Landmark][i] }))} />
      <RelatedLinks eyebrow={content.routes.eyebrow} title={content.routes.title} items={content.routes.items.map((item, i) => ({ ...item, icon: [Route][i] }))} />
      <RelatedLinks eyebrow={content.services.eyebrow} title={content.services.title} items={content.services.items.map((item, i) => ({ ...item, icon: [Car, Users][i] }))} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
