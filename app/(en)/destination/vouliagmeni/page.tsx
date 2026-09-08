import type { Metadata } from "next";
import { MapPin, Route, Sun } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { destinationContent } from "@/content/destinations-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = destinationContent.destinationVouliagmeni.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("destinationVouliagmeni", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("destinationVouliagmeni", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function VouliagmeniDestinationPage() {
  const quoteHref = pathFor("getQuote", "en");

  return (
    <LocationPage
      pageKey="destinationVouliagmeni"
      locale="en"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Athens Riviera", href: pathFor("destinationAthensRiviera", "en") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      extraSchema={[{ "@context": "https://schema.org", "@type": "TouristDestination", name: "Vouliagmeni", description: meta.description }]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.intro} />
      <RelatedLinks eyebrow={content.gettingHere.eyebrow} title={content.gettingHere.title} items={content.gettingHere.items.map((item, i) => ({ ...item, icon: [Route, MapPin][i] }))} />
      <RelatedLinks eyebrow={content.transferOptions.eyebrow} title={content.transferOptions.title} items={content.transferOptions.items.map((item, i) => ({ ...item, icon: [MapPin, Sun][i] }))} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
