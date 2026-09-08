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
import { faqContent, leadCtaContent } from "@/content/home";
import { localizedAlternates, pathFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const title =
  "Ιδιωτικές Μεταφορές, Ταξί και Υπηρεσία Σοφέρ στην Ελλάδα – Κλείστε Τώρα";
const description =
  "Κλείστε ιδιωτικές μεταφορές με ταξί στην Ελλάδα: μεταφορές από το αεροδρόμιο, υπηρεσία σοφέρ και γρήγορες προσφορές για άνετα ταξίδια σε όλη τη χώρα.";

export const metadata: Metadata = {
  title,
  description,
  alternates: localizedAlternates("home", "el"),
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/el/`,
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
  url: `${siteConfig.url}/el/`,
  inLanguage: "el",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Υπηρεσία ταξί και ιδιωτικών μεταφορών",
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
  mainEntity: faqContent.el.items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomeEl() {
  const cta = leadCtaContent.el;

  return (
    <>
      <JsonLd id="webpage-jsonld" data={webPageJsonLd} />
      <JsonLd id="service-jsonld" data={serviceJsonLd} />
      <JsonLd id="faq-jsonld" data={faqJsonLd} />

      <Hero locale="el" />
      <TrustStrip locale="el" />
      <Services locale="el" />
      <Coverage locale="el" />
      <Airports locale="el" />
      <Destinations locale="el" />
      <Routes locale="el" />
      <Ports locale="el" />
      <WhyUs locale="el" />
      <HowItWorks locale="el" />
      <LeadCta
        heading={cta.heading}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref={pathFor("getQuote", "el")}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={pathFor("contact", "el")}
      />
      <Faq locale="el" />
      <FinalCta locale="el" />
    </>
  );
}
