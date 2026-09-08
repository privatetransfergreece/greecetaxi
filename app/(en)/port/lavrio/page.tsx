import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck,
  Clock,
  DoorOpen,
  Landmark,
  MapPin,
  MessageCircle,
  PlaneTakeoff,
  Repeat,
  Ship,
  Users,
} from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationPhotoHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceFaq } from "@/components/service-hub/faq";
import { portContent, portImages } from "@/content/ports-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = portContent.portLavrio.en;
const image = portImages.portLavrio!;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("portLavrio", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("portLavrio", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function LavrioPortPage() {
  const quoteHref = pathFor("getQuote", "en");

  return (
    <LocationPage
      pageKey="portLavrio"
      locale="en"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ports", href: pathFor("destinationsHub", "en") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationPhotoHero content={content.hero} imageSrc={image.src} imageAlt={image.alt.en} quoteHref={quoteHref} />}
      faq={content.faq}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.overview} />
      <ServiceFeatures content={content.transferService} icons={[CalendarCheck, Clock, DoorOpen, Repeat]} />
      <RelatedLinks eyebrow={content.connections.eyebrow} title={content.connections.title} items={content.connections.items.map((item, i) => ({ ...item, icon: [PlaneTakeoff, Building2][i] }))} />
      <ServiceOverview content={content.cruiseFerryContext} />
      <RelatedLinks eyebrow={content.popularDestinations.eyebrow} title={content.popularDestinations.title} items={content.popularDestinations.items.map((item, i) => ({ ...item, icon: [Landmark][i] }))} />
      <ServiceFeatures content={content.bookingInfo} icons={[Ship, MapPin, Users, MessageCircle]} />
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
