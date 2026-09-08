import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { aboutHeroContent } from "@/content/about"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"

function AboutHero({ locale }: { locale: Locale }) {
  const t = aboutHeroContent[locale]
  const quoteHref = pathFor("getQuote", locale)

  return (
    <section className="relative isolate overflow-hidden bg-teal-deep py-20 sm:py-24">
      <Image
        src="/coverage.webp"
        alt={t.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-teal-deep/70" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-teal-deep/90 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ivory/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-sand uppercase ring-1 ring-ivory/15">
          {t.eyebrow}
        </span>

        <h1 className="max-w-3xl font-heading text-3xl leading-tight font-semibold text-ivory sm:text-4xl lg:text-5xl">
          {t.title}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          {t.description}
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button
            className="h-11 bg-coral px-6 text-base text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={quoteHref} />}
          >
            {t.primaryLabel}
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-11 border-ivory/30 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory"
            nativeButton={false}
            render={<Link href={quoteHref} />}
          >
            {t.secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { AboutHero }
