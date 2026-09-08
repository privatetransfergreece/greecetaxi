import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { AboutHero } from "@/components/about/about-hero";
import { WhoWeAre } from "@/components/about/who-we-are";
import { ServicesGrid } from "@/components/about/services-grid";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { GreeceCoverage } from "@/components/about/greece-coverage";
import { Commitment } from "@/components/about/commitment";
import { LeadCta } from "@/components/lead-cta";
import { aboutMeta, aboutCtaContent } from "@/content/about";
import { localizedAlternates, pathFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const { title, description } = aboutMeta.el;

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: localizedAlternates("about", "el"),
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/el/schetika-me-emas/`,
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
  url: `${siteConfig.url}/el/schetika-me-emas/`,
  inLanguage: "el",
};

export default function AboutPageEl() {
  const cta = aboutCtaContent.el;

  return (
    <>
      <JsonLd id="about-webpage-jsonld" data={webPageJsonLd} />

      <AboutHero locale="el" />
      <WhoWeAre locale="el" />
      <ServicesGrid locale="el" />
      <WhyChooseUs locale="el" />
      <GreeceCoverage locale="el" />
      <Commitment locale="el" />
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
