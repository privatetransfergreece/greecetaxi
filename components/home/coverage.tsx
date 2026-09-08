import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { coverageContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

/**
 * Only Crete and Peloponnese have dedicated region pages so far. The other
 * regions are shown as plain, unlinked labels rather than fake links.
 */
const regionPageKeys: (PageKey | null)[] = [
  null, // Athens & Attica
  null, // Central Greece
  null, // Northern Greece
  "regionPeloponnese",
  null, // Thessaly
  null, // Epirus
  null, // Western Greece
  null, // Macedonia
  "regionCrete",
  null, // Aegean Islands
  null, // Ionian Islands
]

function Coverage({ locale }: { locale: Locale }) {
  const t = coverageContent[locale]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {t.regions.map((label, index) => {
              const pageKey = regionPageKeys[index]
              if (!pageKey) {
                return (
                  <span
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-border/70 bg-ivory/60 px-3.5 py-2.5 text-sm font-medium text-slate"
                  >
                    <MapPin className="size-3.5 shrink-0 text-slate/60" />
                    <span className="truncate">{label}</span>
                  </span>
                )
              }
              return (
                <Link
                  key={label}
                  href={pathFor(pageKey, locale)}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-ivory px-3.5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-teal hover:bg-sand"
                >
                  <MapPin className="size-3.5 shrink-0 text-teal" />
                  <span className="truncate">{label}</span>
                </Link>
              )
            })}
          </div>

          <Link
            href={pathFor("destinationsHub", locale)}
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
          >
            {t.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl lg:aspect-square">
          <Image
            src="/coverage.webp"
            alt={t.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent"
            aria-hidden="true"
          />
          <p className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-ivory sm:p-6">
            {t.imageCaption}
          </p>
        </div>
      </Container>
    </section>
  )
}

export { Coverage }
