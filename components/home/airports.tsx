import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { airportsContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

const airportMeta: { pageKey: PageKey; image: string }[] = [
  { pageKey: "athensAirport", image: "/airports/athens.webp" },
  { pageKey: "thessalonikiAirport", image: "/airports/thessaloniki.webp" },
  { pageKey: "heraklionAirport", image: "/airports/heraklion.webp" },
  { pageKey: "chaniaAirport", image: "/airports/chania.webp" },
  { pageKey: "rhodesAirport", image: "/airports/rhodes.webp" },
  { pageKey: "corfuAirport", image: "/airports/corfu.webp" },
  { pageKey: "santoriniAirport", image: "/airports/santorini.webp" },
  { pageKey: "mykonosAirport", image: "/airports/mykonos.webp" },
]

function Airports({ locale }: { locale: Locale }) {
  const t = airportsContent[locale]

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
            className="max-w-2xl"
          />
          <Link
            href={pathFor("airportTransfers", locale)}
            className="inline-flex w-fit shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
          >
            {t.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map(({ name, description, imageAlt }, index) => {
            const { pageKey, image } = airportMeta[index]
            return (
              <Link
                key={name}
                href={pathFor(pageKey, locale)}
                className="group flex flex-col gap-3 overflow-hidden rounded-2xl bg-white ring-1 ring-border transition-shadow hover:shadow-lg hover:shadow-teal-deep/10"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1 px-4 pb-4">
                  <h3 className="font-heading text-base font-semibold text-charcoal">
                    {name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { Airports }
