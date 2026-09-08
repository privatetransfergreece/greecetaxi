import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Services } from "@/components/home/services";
import { Coverage } from "@/components/home/coverage";
import { Airports } from "@/components/home/airports";
import { Destinations } from "@/components/home/destinations";
import { Routes } from "@/components/home/routes";
import { Ports } from "@/components/home/ports";
import { WhyUs } from "@/components/home/why-us";
import { HowItWorks } from "@/components/home/how-it-works";
import { LeadCta } from "@/components/lead-cta";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { faqContent } from "@/content/home";
import { localizedAlternates } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const title = "Greece Taxi & Private Transfers | Airport & City Transfers";
const description =
  "Book private taxi transfers in Greece for airports, cities, ports, hotels and popular destinations. Get a fast quote for comfortable door-to-door transfers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: localizedAlternates("home", "en"),
  openGraph: {
    title,
    description,
    url: siteConfig.url,
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
  url: siteConfig.url,
  inLanguage: "en",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Private taxi and transfer service",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "Country",
    name: "Greece",
  },
  description,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.en.items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd id="webpage-jsonld" data={webPageJsonLd} />
      <JsonLd id="service-jsonld" data={serviceJsonLd} />
      <JsonLd id="faq-jsonld" data={faqJsonLd} />

      <Hero locale="en" />
      <TrustStrip locale="en" />
      <Services locale="en" />
      <Coverage locale="en" />
      <Airports locale="en" />
      <Destinations locale="en" />
      <Routes locale="en" />
      <Ports locale="en" />
      <WhyUs locale="en" />
      <HowItWorks locale="en" />
      <LeadCta />
      <Faq locale="en" />
      <FinalCta locale="en" />
    </>
  );
}
