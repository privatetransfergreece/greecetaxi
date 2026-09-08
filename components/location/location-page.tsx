import type { ReactNode } from "react"

import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { LeadCta } from "@/components/lead-cta"
import type { Locale } from "@/lib/i18n/config"
import { absoluteUrl, pathFor, type PageKey } from "@/lib/i18n/routes"

type FaqItem = { question: string; answer: string }

type LocationPageCta = {
  heading: string
  description: string
  primaryLabel: string
  secondaryLabel: string
  secondaryHref: string
}

function LocationPage({
  pageKey,
  locale,
  title,
  description,
  breadcrumbItems,
  hero,
  faq,
  extraSchema = [],
  cta,
  children,
}: {
  pageKey: PageKey
  locale: Locale
  title: string
  description: string
  breadcrumbItems: Crumb[]
  hero: ReactNode
  faq?: { eyebrow: string; title: string; items: FaqItem[] }
  extraSchema?: object[]
  cta: LocationPageCta
  children: ReactNode
}) {
  const url = absoluteUrl(pathFor(pageKey, locale))
  const quoteHref = pathFor("getQuote", locale)

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: locale,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? absoluteUrl(item.href) : url,
    })),
  }

  const faqJsonLd = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null

  return (
    <>
      <JsonLd id={`${pageKey}-webpage-jsonld`} data={webPageJsonLd} />
      <JsonLd id={`${pageKey}-breadcrumb-jsonld`} data={breadcrumbJsonLd} />
      {faqJsonLd ? <JsonLd id={`${pageKey}-faq-jsonld`} data={faqJsonLd} /> : null}
      {extraSchema.map((schema, index) => (
        <JsonLd key={index} id={`${pageKey}-extra-jsonld-${index}`} data={schema} />
      ))}

      <Breadcrumbs items={breadcrumbItems} />

      {hero}

      {children}

      <LeadCta
        heading={cta.heading}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref={quoteHref}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={cta.secondaryHref}
      />
    </>
  )
}

export { LocationPage }
export type { FaqItem, LocationPageCta }
