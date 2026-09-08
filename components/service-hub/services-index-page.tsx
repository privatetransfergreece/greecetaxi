import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Container } from "@/components/container"
import { JsonLd } from "@/components/json-ld"
import { SectionEyebrow } from "@/components/section-heading"
import { iconByPageKey } from "@/components/service-hub/icon-map"
import { servicesIndexContent, servicesIndexItems } from "@/content/service-hubs"
import type { Locale } from "@/lib/i18n/config"
import { absoluteUrl, pathFor } from "@/lib/i18n/routes"

const homeLabel: Record<Locale, string> = { en: "Home", el: "Αρχική" }

function ServicesIndexPage({ locale }: { locale: Locale }) {
  const t = servicesIndexContent[locale]
  const items = servicesIndexItems[locale]
  const url = absoluteUrl(pathFor("services", locale))

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t.meta.title,
    description: t.meta.description,
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
        item: absoluteUrl(locale === "en" ? "/" : "/es/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.breadcrumbLabel,
        item: url,
      },
    ],
  }

  return (
    <>
      <JsonLd id="services-webpage-jsonld" data={webPageJsonLd} />
      <JsonLd id="services-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <Breadcrumbs
        items={[
          { label: homeLabel[locale], href: locale === "en" ? "/" : "/el/" },
          { label: t.breadcrumbLabel },
        ]}
      />

      <section className="border-b border-border/70 bg-ivory py-16 sm:py-20">
        <Container className="flex max-w-3xl flex-col gap-3">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h1 className="font-heading text-3xl leading-tight font-semibold text-charcoal sm:text-4xl">
            {t.title}
          </h1>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            {t.description}
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = iconByPageKey[item.pageKey]
            return (
              <Link
                key={item.pageKey}
                href={pathFor(item.pageKey, locale)}
                className="group flex flex-col gap-4 rounded-2xl bg-ivory p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-deep/10"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-teal-deep text-ivory">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-heading text-lg font-semibold text-charcoal">
                    {item.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  {t.exploreLabel}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </Container>
      </section>
    </>
  )
}

export { ServicesIndexPage }
