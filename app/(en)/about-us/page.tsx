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
import { localizedAlternates } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const { title, description } = aboutMeta.en;

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: localizedAlternates("about", "en"),
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/about-us/`,
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
  url: `${siteConfig.url}/about-us/`,
  inLanguage: "en",
};

export default function AboutPage() {
  const cta = aboutCtaContent.en;

  return (
    <>
      <JsonLd id="about-webpage-jsonld" data={webPageJsonLd} />

      <AboutHero locale="en" />
      <WhoWeAre locale="en" />
      <ServicesGrid locale="en" />
      <WhyChooseUs locale="en" />
      <GreeceCoverage locale="en" />
      <Commitment locale="en" />
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
