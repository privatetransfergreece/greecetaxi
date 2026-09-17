import type { Metadata } from "next";
import {
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

const content = portContent.portHeraklion.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("portHeraklion", "el"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("portHeraklion", "el")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function HeraklionPortPageEl() {
  const quoteHref = pathFor("getQuote", "el");

  return (
    <LocationPage
      pageKey="portHeraklion"
      locale="el"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Αρχική", href: "/el/" },
        { label: "Λιμάνια", href: pathFor("destinationsHub", "el") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.transferService} icons={[CalendarCheck, Clock, DoorOpen, Repeat]} />
      <RelatedLinks eyebrow={content.connections.eyebrow} title={content.connections.title} items={content.connections.items.map((item, i) => ({ ...item, icon: [PlaneTakeoff, MapPin, Route][i] }))} />
      <ServiceOverview content={content.cruiseFerryContext} />
      <RelatedLinks eyebrow={content.popularDestinations.eyebrow} title={content.popularDestinations.title} items={content.popularDestinations.items.map((item, i) => ({ ...item, icon: [Route][i] }))} />
      <ServiceFeatures content={content.bookingInfo} icons={[Ship, MapPin, Users, MessageCircle]} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
