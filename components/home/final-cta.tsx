import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { finalCtaContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"

function FinalCta({ locale }: { locale: Locale }) {
  const t = finalCtaContent[locale]
  const quoteHref = pathFor("getQuote", locale)
  const contactHref = pathFor("contact", locale)

  return (
    <section className="bg-white py-16">
      <Container className="flex flex-col items-center gap-6 rounded-3xl bg-sand px-6 py-12 text-center sm:px-12">
        <h2 className="max-w-xl font-heading text-2xl font-semibold text-charcoal sm:text-3xl">
          {t.heading}
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
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
            className="h-11 border-teal-deep/20 bg-transparent px-6 text-base text-teal-deep hover:bg-white"
            nativeButton={false}
            render={<Link href={contactHref} />}
          >
            {t.secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { FinalCta }
