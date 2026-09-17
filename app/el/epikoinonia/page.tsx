import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Mail, MapPin, Navigation, Users } from "lucide-react";

import { LocationPage } from "@/components/location/location-page";
import { LocationBandHero } from "@/components/location/hero";
import { ServiceOverview } from "@/components/service-hub/overview";
import { ServiceFeatures } from "@/components/service-hub/features";
import { ServiceHowItWorks } from "@/components/service-hub/how-it-works";
import { ServiceFaq } from "@/components/service-hub/faq";
import { Container } from "@/components/container";
import { contactContent } from "@/content/contact";
import { localizedAlternates, absoluteUrl, pathFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const content = contactContent.el;
const { meta } = content;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: localizedAlternates("contact", "el"),
  openGraph: { title: meta.title, description: meta.description, url: absoluteUrl(pathFor("contact", "el")) },
  twitter: { title: meta.title, description: meta.description },
};

export default function ContactPageEl() {
  return (
    <LocationPage
      pageKey="contact"
      locale="el"
      title={meta.title}
      description={meta.description}
      breadcrumbItems={[{ label: "Αρχική", href: "/el/" }, { label: "Επικοινωνία" }]}
      hero={<LocationBandHero content={content.hero} />}
      faq={content.faq}
      cta={{ heading: content.cta.heading, description: content.cta.description, primaryLabel: content.cta.primaryLabel, secondaryLabel: content.cta.secondaryLabel, secondaryHref: pathFor("services", "el") }}
    >
      <ServiceOverview content={content.intro} />
      <ServiceFeatures content={content.requestDetails} icons={[MapPin, Navigation, CalendarClock, Users]} />
      <ServiceHowItWorks content={content.howItWorks} />
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
