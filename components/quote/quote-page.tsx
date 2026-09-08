import {
  ListChecks,
  MapPinned,
  MessageCircle,
  Route,
  Users,
} from "lucide-react"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"
import { JsonLd } from "@/components/json-ld"
import { LeadCta } from "@/components/lead-cta"
import { QuoteHero } from "@/components/quote/hero"
import { QuoteRequestForm } from "@/components/quote/quote-request-form"
import { HelpfulInfo } from "@/components/quote/helpful-info"
import { ServiceHowItWorks } from "@/components/service-hub/how-it-works"
import { ServiceFeatures } from "@/components/service-hub/features"
import { RelatedServices } from "@/components/service-hub/related-services"
import { ServiceFaq } from "@/components/service-hub/faq"
import { quoteContent } from "@/content/quote"
import type { Locale } from "@/lib/i18n/config"
import { absoluteUrl, pathFor, withLocalePrefix } from "@/lib/i18n/routes"

const homeLabel: Record<Locale, string> = { en: "Home", el: "Αρχική" }
const whyQuoteIcons = [Route, Users, ListChecks, MapPinned, MessageCircle]

function QuotePage({ locale }: { locale: Locale }) {
  const content = quoteContent[locale]
  const url = absoluteUrl(pathFor("getQuote", locale))

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.meta.title,
    description: content.meta.description,
    url,
    inLanguage: locale,
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
      <JsonLd id="quote-webpage-jsonld" data={webPageJsonLd} />
      <JsonLd id="quote-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="quote-faq-jsonld" data={faqJsonLd} />

      <Breadcrumbs
        items={[
          { label: homeLabel[locale], href: withLocalePrefix("/", locale) },
          { label: content.breadcrumbLabel },
        ]}
      />

      <QuoteHero content={content.hero} />

      <section id="quote-form" className="scroll-mt-20 bg-white py-14 sm:py-16">
        <Container className="max-w-3xl">
          <QuoteRequestForm content={content} locale={locale} />
        </Container>
      </section>

      <ServiceHowItWorks content={content.howItWorks} />
      <ServiceFeatures content={content.whyQuote} icons={whyQuoteIcons} />
      <HelpfulInfo content={content.helpfulInfo} />
      <RelatedServices locale={locale} content={content.related} />
      <ServiceFaq content={content.faq} />

      <LeadCta
        heading={content.cta.heading}
        description={content.cta.description}
        primaryLabel={content.cta.primaryLabel}
        primaryHref="#quote-form"
        secondaryLabel={content.cta.secondaryLabel}
        secondaryHref={pathFor("services", locale)}
      />
    </>
  )
}

export { QuotePage }
