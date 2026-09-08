import type { ReactNode } from "react"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { LeadCta } from "@/components/lead-cta"
import { ServiceHero } from "@/components/service-hub/hero"
import {
  serviceHubImages,
  serviceHubs,
  servicesIndexContent,
  type ServiceSlug,
} from "@/content/service-hubs"
import type { Locale } from "@/lib/i18n/config"
import { absoluteUrl, pathFor, withLocalePrefix } from "@/lib/i18n/routes"
import { siteConfig } from "@/lib/site-config"

const homeLabel: Record<Locale, string> = { en: "Home", el: "Αρχική" }

function ServiceHubPage({
  slug,
  locale,
  children,
}: {
  slug: ServiceSlug
  locale: Locale
  children: ReactNode
}) {
  const content = serviceHubs[slug][locale]
  const quoteHref = pathFor("getQuote", locale)
  const servicesLabel = servicesIndexContent[locale].breadcrumbLabel
  const url = absoluteUrl(pathFor(slug, locale))

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.meta.title,
    description: content.meta.description,
    url,
    inLanguage: locale,
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.hero.title,
    description: content.meta.description,
    areaServed: { "@type": "Country", name: "Greece" },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel[locale],
        item: absoluteUrl(withLocalePrefix("/", locale)),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: servicesLabel,
        item: absoluteUrl(pathFor("services", locale)),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.breadcrumbLabel,
        item: url,
      },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <>
      <JsonLd id={`${slug}-webpage-jsonld`} data={webPageJsonLd} />
      <JsonLd id={`${slug}-service-jsonld`} data={serviceJsonLd} />
      <JsonLd id={`${slug}-breadcrumb-jsonld`} data={breadcrumbJsonLd} />
      <JsonLd id={`${slug}-faq-jsonld`} data={faqJsonLd} />

      <Breadcrumbs
        items={[
          { label: homeLabel[locale], href: withLocalePrefix("/", locale) },
          { label: servicesLabel, href: pathFor("services", locale) },
          { label: content.breadcrumbLabel },
        ]}
      />

      <ServiceHero
        content={content.hero}
        imageSrc={serviceHubImages[slug]}
        quoteHref={quoteHref}
      />

      {children}

      <LeadCta
        heading={content.cta.heading}
        description={content.cta.description}
        primaryLabel={content.cta.primaryLabel}
        primaryHref={quoteHref}
        secondaryLabel={content.cta.secondaryLabel}
        secondaryHref={quoteHref}
      />
    </>
  )
}

export { ServiceHubPage }
