import type { Metadata } from "next";
import {
  Building2,
  Car,
  Landmark,
  MapPinned,
  Mountain,
  PlaneTakeoff,
  Route,
  Ship,
  Users,
} from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationPhotoHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { cityContent, cityImages } from "@/content/cities-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = cityContent.cityThessaloniki.en;
const image = cityImages.cityThessaloniki!;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("cityThessaloniki", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("cityThessaloniki", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function ThessalonikiCityPage() {
  const quoteHref = pathFor("getQuote", "en");

  return (
    <LocationPage
      pageKey="cityThessaloniki"
      locale="en"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Destinations", href: pathFor("destinationsHub", "en") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationPhotoHero content={content.hero} imageSrc={image.src} imageAlt={image.alt.en} quoteHref={quoteHref} />}
      faq={content.faq}
      extraSchema={[{ "@context": "https://schema.org", "@type": "TouristDestination", name: "Thessaloniki", description: meta.description }]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.intro} />
      <RelatedLinks eyebrow={content.gettingHere.eyebrow} title={content.gettingHere.title} items={content.gettingHere.items.map((item, i) => ({ ...item, icon: [PlaneTakeoff, Ship][i] }))} />
      <ServiceFeatures content={content.transferOptions} icons={[PlaneTakeoff, Car, Route, Users]} />
      <RelatedLinks eyebrow={content.popularRoutes.eyebrow} title={content.popularRoutes.title} items={content.popularRoutes.items.map((item, i) => ({ ...item, icon: [Landmark, Building2, Mountain, Mountain, Landmark, Route][i] }))} />
      <RelatedLinks eyebrow={content.nearbyDestinations.eyebrow} title={content.nearbyDestinations.title} items={content.nearbyDestinations.items.map((item, i) => ({ ...item, icon: [MapPinned, Route, MapPinned][i] }))} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
