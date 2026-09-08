import type { Metadata } from "next";
import {
  Building2,
  CalendarClock,
  CalendarCheck,
  Clock,
  DoorOpen,
  Luggage,
  MessageCircle,
  PlaneTakeoff,
  Repeat,
  Route,
  Ship,
  Users,
} from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationPhotoHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { ServiceHowItWorks } from "@/components/service-hub/how-it-works";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { airportContent, airportImages } from "@/content/airports-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = airportContent.thessalonikiAirport.el;
const image = airportImages.thessalonikiAirport;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("thessalonikiAirport", "el"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("thessalonikiAirport", "el")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function ThessalonikiAirportPageEl() {
  const quoteHref = pathFor("getQuote", "el");

  return (
    <LocationPage
      pageKey="thessalonikiAirport"
      locale="el"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Αρχική", href: "/el/" },
        { label: "Αεροδρόμια", href: pathFor("destinationsHub", "el") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationPhotoHero content={content.hero} imageSrc={image.src} imageAlt={image.alt.el} quoteHref={quoteHref} />}
      faq={content.faq}
      extraSchema={[{ "@context": "https://schema.org", "@type": "Airport", name: content.officialName, iataCode: content.iataCode }]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.transferService} icons={[DoorOpen, CalendarCheck, Repeat, Luggage]} />
      <RelatedLinks eyebrow={content.destinations.eyebrow} title={content.destinations.title} items={content.destinations.items.map((item, i) => ({ ...item, icon: [Route, Route][i] }))} />
      <RelatedLinks eyebrow={content.connections.eyebrow} title={content.connections.title} items={content.connections.items.map((item, i) => ({ ...item, icon: [Building2, Ship][i] }))} />
      <ServiceHowItWorks content={content.howPickupWorks} />
      <ServiceFeatures content={content.travelPlanning} icons={[CalendarClock, PlaneTakeoff, Route, MessageCircle]} />
      <ServiceFeatures content={content.vehicleConsiderations} icons={[Users, Users, Luggage, Clock]} />
      <RelatedLinks eyebrow={content.relatedServices.eyebrow} title={content.relatedServices.title} items={content.relatedServices.items.map((item, i) => ({ ...item, icon: [PlaneTakeoff, Route, Users][i] }))} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
