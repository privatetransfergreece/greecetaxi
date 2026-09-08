import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { iconByPageKey } from "@/components/service-hub/icon-map"
import { servicesIndexItems, type RelatedServiceEntry } from "@/content/service-hubs"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"

function RelatedServices({
  locale,
  content,
}: {
  locale: Locale
  content: { eyebrow: string; title: string; items: RelatedServiceEntry[] }
}) {
  const indexItems = servicesIndexItems[locale]

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} className="max-w-2xl" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map(({ pageKey, blurb }) => {
            const entry = indexItems.find((item) => item.pageKey === pageKey)
            if (!entry) return null
            const Icon = iconByPageKey[pageKey]

            return (
              <Link
                key={pageKey}
                href={pathFor(pageKey, locale)}
                className="group flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-deep/10"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-teal-deep/10 text-teal-deep">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <h3 className="font-heading text-base font-semibold text-charcoal">
                  {entry.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate">{blurb}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  {entry.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { RelatedServices }
