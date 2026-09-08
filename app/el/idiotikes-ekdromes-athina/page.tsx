import type { Metadata } from "next";
import { Route, Users } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { destinationContent } from "@/content/destinations-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = destinationContent.athensDayTrips.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("athensDayTrips", "el"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("athensDayTrips", "el")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function AthensDayTripsPageEl() {
  const quoteHref = pathFor("getQuote", "el");

  return (
    <LocationPage
      pageKey="athensDayTrips"
      locale="el"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Αρχική", href: "/el/" },
        { label: "Αθήνα", href: pathFor("cityAthens", "el") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      extraSchema={[{ "@context": "https://schema.org", "@type": "WebPage", name: meta.title, description: meta.description }]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.intro} />
      <RelatedLinks eyebrow={content.gettingHere.eyebrow} title={content.gettingHere.title} items={content.gettingHere.items.map((item) => ({ ...item, icon: Route }))} />
      <RelatedLinks eyebrow={content.transferOptions.eyebrow} title={content.transferOptions.title} items={content.transferOptions.items.map((item) => ({ ...item, icon: Users }))} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
