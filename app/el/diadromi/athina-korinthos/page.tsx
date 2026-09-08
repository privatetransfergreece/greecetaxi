import type { Metadata } from "next";
import { Building2, Clock, Landmark, Luggage, MapPin, Route as RouteIcon, Users } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { routeContent } from "@/content/routes-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const content = routeContent.routeAthensCorinth.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("routeAthensCorinth", "el"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("routeAthensCorinth", "el")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function AthensCorinthRoutePageEl() {
  const quoteHref = pathFor("getQuote", "el");

  return (
    <LocationPage
      pageKey="routeAthensCorinth"
      locale="el"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Αρχική", href: "/el/" },
        { label: "Διαδρομές", href: pathFor("destinationsHub", "el") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      extraSchema={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: content.hero.title,
          description: meta.description,
          areaServed: { "@type": "Country", name: "Greece" },
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        },
      ]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.journeyPlanning} icons={[Clock, RouteIcon, Luggage, MapPin]} />
      <ServiceFeatures content={content.whoItSuits} icons={[Landmark, MapPin, Users]} />
      <RelatedLinks eyebrow={content.relatedLinks.eyebrow} title={content.relatedLinks.title} items={content.relatedLinks.items.map((item, i) => ({ ...item, icon: [Building2, MapPin][i] }))} />
      {content.relatedRoutes && (
        <RelatedLinks eyebrow={content.relatedRoutes.eyebrow} title={content.relatedRoutes.title} items={content.relatedRoutes.items.map((item, i) => ({ ...item, icon: [RouteIcon, RouteIcon][i] }))} />
      )}
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
