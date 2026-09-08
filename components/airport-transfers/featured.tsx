import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { featuredAirportsContent } from "@/content/airport-transfers"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"

const imageBySlug: Record<string, string> = {
  athens: "/airports/athens.webp",
  thessaloniki: "/airports/thessaloniki.webp",
  santorini: "/airports/santorini.webp",
  mykonos: "/airports/mykonos.webp",
  heraklion: "/airports/heraklion.webp",
  chania: "/airports/chania.webp",
  rhodes: "/airports/rhodes.webp",
  corfu: "/airports/corfu.webp",
}

function FeaturedAirports({ locale }: { locale: Locale }) {
  const t = featuredAirportsContent[locale]
  const quoteHref = pathFor("getQuote", locale)

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          className="max-w-2xl"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map(({ slug, name, description }) => (
            <div
              key={slug}
              className="flex flex-col gap-3 overflow-hidden rounded-2xl bg-ivory ring-1 ring-border"
            >
              <Link
                href={`#airport-${slug}`}
                className="group relative aspect-4/3 block w-full overflow-hidden"
              >
                <Image
                  src={imageBySlug[slug]}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>
              <div className="flex flex-col gap-2 px-4 pb-4">
                <h3 className="font-heading text-base font-semibold text-charcoal">
                  {name}
                </h3>
                <p className="text-sm leading-relaxed text-slate">
                  {description}
                </p>
                <Link
                  href={quoteHref}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
                >
                  {t.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { FeaturedAirports }
