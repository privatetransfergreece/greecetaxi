import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck,
  Clock,
  DoorOpen,
  MapPin,
  MessageCircle,
  PlaneTakeoff,
  Repeat,
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
import { portContent } from "@/content/ports-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = portContent.portThessaloniki.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("portThessaloniki", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("portThessaloniki", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function ThessalonikiPortPage() {
  const quoteHref = pathFor("getQuote", "en");

  return (
    <LocationPage
      pageKey="portThessaloniki"
      locale="en"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ports", href: pathFor("destinationsHub", "en") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.transferService} icons={[CalendarCheck, Clock, DoorOpen, Repeat]} />
      <RelatedLinks eyebrow={content.connections.eyebrow} title={content.connections.title} items={content.connections.items.map((item, i) => ({ ...item, icon: [PlaneTakeoff, Building2][i] }))} />
      <ServiceOverview content={content.cruiseFerryContext} />
      <RelatedLinks eyebrow={content.popularDestinations.eyebrow} title={content.popularDestinations.title} items={content.popularDestinations.items.map((item, i) => ({ ...item, icon: [Route, Route][i] }))} />
      <ServiceFeatures content={content.bookingInfo} icons={[Ship, MapPin, Users, MessageCircle]} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
