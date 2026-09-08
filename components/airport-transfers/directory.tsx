import Link from "next/link"
import { MapPin } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { airportDirectoryContent } from "@/content/airport-transfers"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"

function AirportDirectory({ locale }: { locale: Locale }) {
  const t = airportDirectoryContent[locale]
  const quoteHref = pathFor("getQuote", locale)

  return (
    <section id="airport-directory" className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          className="max-w-3xl"
        />

        <div className="flex flex-col gap-10">
          {t.groups.map((group, groupIndex) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                {group.title}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.airports.map((airport) => (
                  <div
                    key={airport.slug}
                    id={`airport-${airport.slug}`}
                    className="flex scroll-mt-24 items-start justify-between gap-3 rounded-xl border border-border bg-white p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-charcoal">
                          {airport.name}
                        </span>
                        <span className="text-xs font-medium tracking-wide text-slate uppercase">
                          {airport.code}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={quoteHref}
                      className="shrink-0 text-xs font-semibold whitespace-nowrap text-teal-deep hover:text-coral"
                    >
                      {t.quoteLabel}
                    </Link>
                  </div>
                ))}
              </div>
              {groupIndex === t.groups.length - 1 ? (
                <p className="text-xs text-slate italic">{t.ionianNote}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { AirportDirectory }
