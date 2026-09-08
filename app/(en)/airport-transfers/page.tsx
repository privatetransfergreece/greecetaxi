import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AirportHero } from "@/components/airport-transfers/hero";
import { AirportIntro } from "@/components/airport-transfers/intro";
import { AirportHowItWorks } from "@/components/airport-transfers/how-it-works";
import { PickupOptions } from "@/components/airport-transfers/pickup-options";
import { AirportDirectory } from "@/components/airport-transfers/directory";
import { FeaturedAirports } from "@/components/airport-transfers/featured";
import { AirportDestinations } from "@/components/airport-transfers/destinations";
import { AirportWhyChoose } from "@/components/airport-transfers/why-choose";
import { AirportArrivalInfo } from "@/components/airport-transfers/arrival-info";
import { AirportVehicles } from "@/components/airport-transfers/vehicles";
import { AirportFaq } from "@/components/airport-transfers/faq";
import { RelatedServices } from "@/components/service-hub/related-services";
import { LeadCta } from "@/components/lead-cta";
import {
  airportTransfersMeta,
  airportCtaContent,
  airportFaqContent,
  airportBreadcrumbContent,
} from "@/content/airport-transfers";
import { servicesIndexContent } from "@/content/service-hubs";
import { localizedAlternates, pathFor, absoluteUrl } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const { title, description } = airportTransfersMeta.en;
const breadcrumbLabels = airportBreadcrumbContent.en;
const servicesLabel = servicesIndexContent.en.breadcrumbLabel;

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: localizedAlternates("airportTransfers", "en"),
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}${pathFor("airportTransfers", "en")}`,
  },
  twitter: {
    title,
    description,
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: `${siteConfig.url}${pathFor("airportTransfers", "en")}`,
  inLanguage: "en",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  description,
  serviceType: "Airport transfer",
  areaServed: {
    "@type": "Country",
    name: "Greece",
  },
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: breadcrumbLabels.home,
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: servicesLabel,
      item: absoluteUrl(pathFor("services", "en")),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: breadcrumbLabels.current,
      item: `${siteConfig.url}${pathFor("airportTransfers", "en")}`,
    },
  ],
};

const relatedServicesContent = {
  eyebrow: "Related Services",
  title: "Continue Your Journey From the Airport",
  items: [
    { pageKey: "cityToCityTransfers" as const, blurb: "Connecting onward to another Greek city or a destination such as Delphi or Meteora? See our city-to-city transfer page." },
    { pageKey: "groupTransfers" as const, blurb: "Travelling as a larger family or group? Group airport transfers use a vehicle matched to your total numbers." },
    { pageKey: "corporateTransfers" as const, blurb: "Arriving ahead of a business meeting? See our corporate transfer service for professional, punctual pickups." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: airportFaqContent.en.items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AirportTransfersPage() {
  const cta = airportCtaContent.en;

  return (
    <>
      <JsonLd id="airport-webpage-jsonld" data={webPageJsonLd} />
      <JsonLd id="airport-service-jsonld" data={serviceJsonLd} />
      <JsonLd id="airport-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="airport-faq-jsonld" data={faqJsonLd} />

      <Breadcrumbs
        items={[
          { label: breadcrumbLabels.home, href: "/" },
          { label: servicesLabel, href: pathFor("services", "en") },
          { label: breadcrumbLabels.current },
        ]}
      />

      <AirportHero locale="en" />
      <AirportIntro locale="en" />
      <AirportHowItWorks locale="en" />
      <PickupOptions locale="en" />
      <AirportDirectory locale="en" />
      <FeaturedAirports locale="en" />
      <AirportDestinations locale="en" />
      <AirportWhyChoose locale="en" />
      <AirportArrivalInfo locale="en" />
      <AirportVehicles locale="en" />
      <RelatedServices locale="en" content={relatedServicesContent} />
      <AirportFaq locale="en" />
      <LeadCta
        heading={cta.heading}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref={siteConfig.quoteHref}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={siteConfig.quoteHref}
      />
    </>
  );
}
