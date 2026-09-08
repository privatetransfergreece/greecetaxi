import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFaq } from "@/components/service-hub/faq";
import { Container } from "@/components/container";
import { contactContent } from "@/content/contact";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const content = contactContent.en;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("contact", "en"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("contact", "en")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function ContactPage() {
  return (
    <LocationPage
      pageKey="contact"
      locale="en"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: pathFor("services", "en") }}
    >
      <ServiceOverview content={content.intro} />
      <section className="bg-ivory py-16 sm:py-20">
        <Container className="flex max-w-2xl flex-col gap-6">
          <h2 className="font-heading text-xl font-semibold text-charcoal sm:text-2xl">
            {content.details.title}
          </h2>
          <p className="text-base leading-relaxed text-slate">{content.details.companyLabel}</p>
          <Link
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-flex w-fit items-center gap-2 text-base font-semibold text-teal-deep hover:text-coral"
          >
            <Mail className="size-4.5" />
            {siteConfig.contactEmail}
          </Link>
        </Container>
      </section>
      <ServiceFaq content={content.faq} />
    </LocationPage>
  );
}
