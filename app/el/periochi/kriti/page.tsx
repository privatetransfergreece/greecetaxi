import type { Metadata } from "next";
import { Anchor, Building2, Car, MapPin, PlaneTakeoff, Route, Users } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationPhotoHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { RelatedLinks } from "@/components/location/related-links";
import { ServiceHowItWorks } from "@/components/service-hub/how-it-works";
import { ServiceFaq } from "@/components/service-hub/faq";
import { regionContent, regionImages } from "@/content/regions-data";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";

const content = regionContent.regionCrete.el;
const image = regionImages.regionCrete!;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("regionCrete", "el"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("regionCrete", "el")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function CreteRegionPageEl() {
  const quoteHref = pathFor("getQuote", "el");

  return (
    <LocationPage
      pageKey="regionCrete"
      locale="el"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[
        { label: "Αρχική", href: "/el/" },
        { label: "Προορισμοί", href: pathFor("destinationsHub", "el") },
        { label: content.breadcrumbLabel },
      ]}
      hero={<LocationPhotoHero content={content.hero} imageSrc={image.src} imageAlt={image.alt.el} quoteHref={quoteHref} />}
      faq={content.faq}
      extraSchema={[{ "@context": "https://schema.org", "@type": "TouristDestination", name: "Crete", description: meta.description }]}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: quoteHref }}
    >
      <ServiceOverview content={content.intro} />
      <RelatedLinks eyebrow={content.airports.eyebrow} title={content.airports.title} items={content.airports.items.map((item, i) => ({ ...item, icon: [PlaneTakeoff, PlaneTakeoff][i] }))} />
      <RelatedLinks eyebrow={content.ports.eyebrow} title={content.ports.title} items={content.ports.items.map((item) => ({ ...item, icon: Anchor }))} />
      <RelatedLinks eyebrow={content.cities.eyebrow} title={content.cities.title} items={content.cities.items.map((item) => ({ ...item, icon: MapPin }))} />
      <RelatedLinks eyebrow={content.routes.eyebrow} title={content.routes.title} items={content.routes.items.map((item) => ({ ...item, icon: Route }))} />
      {content.hotelTransfers && (
        <RelatedLinks eyebrow={content.hotelTransfers.eyebrow} title={content.hotelTransfers.title} description={content.hotelTransfers.description} items={content.hotelTransfers.items.map((item) => ({ ...item, icon: Building2 }))} />
      )}
      <RelatedLinks eyebrow={content.services.eyebrow} title={content.services.title} description={content.services.description} items={content.services.items.map((item, i) => ({ ...item, icon: [Car, Users][i] }))} />
      {content.howItWorks && <ServiceHowItWorks content={content.howItWorks} />}
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
