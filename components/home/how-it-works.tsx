import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { howItWorksContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"
import { pathFor } from "@/lib/i18n/routes"

function HowItWorks({ locale }: { locale: Locale }) {
  const t = howItWorksContent[locale]
  const quoteHref = pathFor("getQuote", locale)

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading align="center" eyebrow={t.eyebrow} title={t.title} />

        <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-border sm:block"
            aria-hidden="true"
          />
          {t.steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col gap-3">
              <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-teal-deep font-heading text-base font-semibold text-ivory">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            className="h-11 bg-coral px-6 text-base text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={quoteHref} />}
          >
            {t.cta}
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { HowItWorks }
