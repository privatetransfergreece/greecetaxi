import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { portsContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, type PageKey } from "@/lib/i18n/routes"

const portPageKeys: PageKey[] = [
  "portPiraeus",
  "portRafina",
  "portLavrio",
  "portThessaloniki",
  "portHeraklion",
  "portPatras",
]

function Ports({ locale }: { locale: Locale }) {
  const t = portsContent[locale]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl">
            <Image
              src="/ports/piraeus.webp"
              alt={t.piraeusImageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl">
            <Image
              src="/ports/lavrio.webp"
              alt={t.lavrioImageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />

          <div className="flex flex-wrap gap-2.5">
            {t.ports.map((label, index) => (
              <Link
                key={label}
                href={pathFor(portPageKeys[index], locale)}
                className="rounded-full border border-border bg-ivory px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-teal hover:bg-sand"
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href={pathFor("cruisePortTransfers", locale)}
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-coral"
          >
            {t.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export { Ports }
