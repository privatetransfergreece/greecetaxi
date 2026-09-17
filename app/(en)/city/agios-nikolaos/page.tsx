import type { Metadata } from "next";
import {
  Building2,
  Car,
  Landmark,
  MapPin,
  PlaneTakeoff,
  Route,
  Ship,
  Users,
} from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { cityContent } from "@/content/cities-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = cityContent.cityAgiosNikolaos.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("cityAgiosNikolaos", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("cityAgiosNikolaos", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function AgiosNikolaosCityPage() {
  const quoteHref = pathFor("getQuote", "en");

  return (
    <LocationPage
      pageKey="cityAgiosNikolaos"
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
      extraSchema={[{ "@context": "https://schema.org", "@type": "TouristDestination", name: content.breadcrumbLabel, description: meta.description }]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.intro} />
      <RelatedLinks eyebrow={content.gettingHere.eyebrow} title={content.gettingHere.title} items={content.gettingHere.items.map((item) => ({ ...item, icon: PlaneTakeoff }))} />
      <ServiceFeatures content={content.transferOptions} icons={[PlaneTakeoff, Car, Route, Users]} />
      <RelatedLinks eyebrow={content.popularRoutes.eyebrow} title={content.popularRoutes.title} items={content.popularRoutes.items.map((item) => ({ ...item, icon: Landmark }))} />
      <RelatedLinks eyebrow={content.nearbyDestinations.eyebrow} title={content.nearbyDestinations.title} items={content.nearbyDestinations.items.map((item) => ({ ...item, icon: MapPin }))} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
