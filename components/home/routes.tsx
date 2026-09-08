import Link from "next/link"
import { ArrowRight, MoveRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { routesContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

const routePageKeys: PageKey[] = [
  "routeAthensDelphi",
  "routeAthensNafplio",
  "routeAthensMeteora",
  "routeAthensThessaloniki",
  "routeThessalonikiHalkidiki",
  "routeHeraklionChania",
]

function Routes({ locale }: { locale: Locale }) {
  const t = routesContent[locale]

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
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map(({ from, to }, index) => (
            <Link
              key={routePageKeys[index]}
              href={pathFor(routePageKeys[index], locale)}
              className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-white px-5 py-4 transition-colors hover:border-teal hover:bg-sand/60"
            >
              <span className="flex items-center gap-2.5 text-sm font-semibold text-charcoal sm:text-base">
                {from}
                <MoveRight className="size-4 text-coral" />
                {to}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-deep opacity-0 transition-opacity group-hover:opacity-100">
                {t.viewRoute}
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <Link
          href={pathFor("cityToCityTransfers", locale)}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
        >
          {t.cta}
          <ArrowRight className="size-4" />
        </Link>
      </Container>
    </section>
  )
}

export { Routes }
