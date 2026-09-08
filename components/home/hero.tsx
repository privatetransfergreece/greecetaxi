import Image from "next/image"
import { Star } from "lucide-react"

import { Container } from "@/components/container"
import { HeroQuoteBar } from "@/components/home/hero-quote-bar"
import { heroContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

function Hero({ locale }: { locale: Locale }) {
  const t = heroContent[locale]

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden py-20 sm:py-24">
      <Image
        src="/homepage-herosection.jpg"
        alt={t.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-teal-deep/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-teal-deep/95 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-teal-deep/90 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ivory/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-sand uppercase ring-1 ring-ivory/15">
            {t.eyebrow}
          </span>

          <h1
            className={cn(
              "font-heading text-3xl leading-tight font-semibold text-ivory sm:text-4xl lg:text-[2.75rem]",
              locale === "en" && "lg:whitespace-nowrap"
            )}
          >
            {t.title}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {t.description}
          </p>
        </div>

        <HeroQuoteBar locale={locale} className="w-full max-w-5xl" />

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5 text-sand" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-ivory/80">
            {t.trustLine}
          </span>
        </div>
      </Container>
    </section>
  )
}

export { Hero }
