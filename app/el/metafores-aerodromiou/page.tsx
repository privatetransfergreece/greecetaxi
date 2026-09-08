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

const { title, description } = airportTransfersMeta.el;
const breadcrumbLabels = airportBreadcrumbContent.el;
const servicesLabel = servicesIndexContent.el.breadcrumbLabel;

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: localizedAlternates("airportTransfers", "el"),
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}${pathFor("airportTransfers", "el")}`,
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
  url: `${siteConfig.url}${pathFor("airportTransfers", "el")}`,
  inLanguage: "el",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  description,
  serviceType: "Μεταφορά αεροδρομίου",
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
      item: `${siteConfig.url}/el/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: servicesLabel,
      item: absoluteUrl(pathFor("services", "el")),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: breadcrumbLabels.current,
      item: `${siteConfig.url}${pathFor("airportTransfers", "el")}`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: airportFaqContent.el.items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const relatedServicesContent = {
  eyebrow: "Σχετικές Υπηρεσίες",
  title: "Συνεχίστε το Ταξίδι σας Από το Αεροδρόμιο",
  items: [
    { pageKey: "cityToCityTransfers" as const, blurb: "Συνδέεστε με άλλη ελληνική πόλη ή προορισμό όπως οι Δελφοί ή τα Μετέωρα; Δείτε τη σελίδα μας για μεταφορές μεταξύ πόλεων." },
    { pageKey: "groupTransfers" as const, blurb: "Ταξιδεύετε ως μεγαλύτερη οικογένεια ή ομάδα; Οι ομαδικές μεταφορές αεροδρομίου χρησιμοποιούν όχημα προσαρμοσμένο στον συνολικό σας αριθμό." },
    { pageKey: "corporateTransfers" as const, blurb: "Φτάνετε πριν από μια επαγγελματική συνάντηση; Δείτε την υπηρεσία εταιρικών μεταφορών μας με ακριβείς και επαγγελματικές παραλαβές." },
  ],
};

export default function AirportTransfersPageEl() {
  const cta = airportCtaContent.el;

  return (
    <>
      <JsonLd id="airport-webpage-jsonld" data={webPageJsonLd} />
      <JsonLd id="airport-service-jsonld" data={serviceJsonLd} />
      <JsonLd id="airport-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="airport-faq-jsonld" data={faqJsonLd} />

      <Breadcrumbs
        items={[
          { label: breadcrumbLabels.home, href: "/el/" },
          { label: servicesLabel, href: pathFor("services", "el") },
          { label: breadcrumbLabels.current },
        ]}
      />

      <AirportHero locale="el" />
      <AirportIntro locale="el" />
      <AirportHowItWorks locale="el" />
      <PickupOptions locale="el" />
      <AirportDirectory locale="el" />
      <FeaturedAirports locale="el" />
      <AirportDestinations locale="el" />
      <AirportWhyChoose locale="el" />
      <AirportArrivalInfo locale="el" />
      <AirportVehicles locale="el" />
      <RelatedServices locale="el" content={relatedServicesContent} />
      <AirportFaq locale="el" />
      <LeadCta
        heading={cta.heading}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref={pathFor("getQuote", "el")}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={pathFor("getQuote", "el")}
      />
    </>
  );
}
