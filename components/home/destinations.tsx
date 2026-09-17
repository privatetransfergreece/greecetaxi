import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { destinationsContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

const destinationMeta: { pageKey: PageKey; image: string }[] = [
  { pageKey: "cityAthens", image: "/destinations/athens.webp" },
  { pageKey: "destinationSantorini", image: "/destinations/santorini.webp" },
  { pageKey: "destinationMykonos", image: "/destinations/mykonos.webp" },
  { pageKey: "cityThessaloniki", image: "/destinations/thessaloniki.webp" },
  { pageKey: "cityHeraklion", image: "/destinations/heraklion.webp" },
  { pageKey: "destinationRhodes", image: "/destinations/rhodes.webp" },
]

function Destinations({ locale }: { locale: Locale }) {
  const t = destinationsContent[locale]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            className="max-w-2xl"
          />
          <Link
            href={pathFor("destinationsHub", locale)}
            className="inline-flex w-fit shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
          >
            {t.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map(({ name, description, imageAlt }, index) => {
            const { pageKey, image } = destinationMeta[index]
            return (
              <Link
                key={name}
                href={pathFor(pageKey, locale)}
                className="group relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-3/4"
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
                  <h3 className="font-heading text-xl font-semibold text-ivory">
                    {name}
                  </h3>
                  <p className="text-sm text-ivory/80">{description}</p>
                  <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sand">
                    {t.exploreLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { Destinations }
