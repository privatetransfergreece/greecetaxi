import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Building2,
  Clock,
  Plane,
  Ship,
  Users,
  type LucideIcon,
} from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { servicesContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

const serviceMeta: { icon: LucideIcon; pageKey: PageKey; tint: string }[] = [
  { icon: Plane, pageKey: "airportTransfers", tint: "bg-sand" },
  { icon: Building2, pageKey: "cityToCityTransfers", tint: "bg-white ring-1 ring-border" },
  { icon: Ship, pageKey: "cruisePortTransfers", tint: "bg-sand" },
  { icon: Clock, pageKey: "hourlyHire", tint: "bg-white ring-1 ring-border" },
  { icon: Briefcase, pageKey: "corporateTransfers", tint: "bg-sand" },
  { icon: Users, pageKey: "groupTransfers", tint: "bg-white ring-1 ring-border" },
]

function Services({ locale }: { locale: Locale }) {
  const t = servicesContent[locale]

  return (
    <section id="transfers" className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map(({ title, description, cta }, index) => {
            const { icon: Icon, pageKey, tint } = serviceMeta[index]
            return (
              <Link
                key={title}
                href={pathFor(pageKey, locale)}
                className={`group flex flex-col gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-deep/10 ${tint}`}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-teal-deep text-ivory">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {description}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  {cta}
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

export { Services }
