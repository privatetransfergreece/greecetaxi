import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { aboutCoverageContent } from "@/content/about"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

const placePageKeys: PageKey[] = [
  "cityAthens",
  "cityThessaloniki",
  "destinationSantorini",
  "destinationMykonos",
  "regionCrete",
  "destinationRhodes",
  "destinationCorfu",
  "destinationZakynthos",
  "destinationKos",
  "cityKalamata",
  "destinationNafplio",
  "destinationMeteora",
  "regionPeloponnese",
]

function GreeceCoverage({ locale }: { locale: Locale }) {
  const t = aboutCoverageContent[locale]

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          className="max-w-3xl"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {t.places.map((label, index) => (
            <Link
              key={label}
              href={pathFor(placePageKeys[index], locale)}
              className="group flex items-center gap-2 rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-teal hover:bg-sand"
            >
              <MapPin className="size-3.5 shrink-0 text-teal" />
              <span className="truncate">{label}</span>
            </Link>
          ))}
        </div>

        <Link
          href={pathFor("destinationsHub", locale)}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
        >
          {t.cta}
          <ArrowRight className="size-4" />
        </Link>
      </Container>
    </section>
  )
}

export { GreeceCoverage }
