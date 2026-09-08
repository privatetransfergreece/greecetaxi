import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { airportHowItWorksContent } from "@/content/airport-transfers"
import type { Locale } from "@/lib/i18n/config"

function AirportHowItWorks({ locale }: { locale: Locale }) {
  const t = airportHowItWorksContent[locale]

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading align="center" eyebrow={t.eyebrow} title={t.title} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, index) => (
            <Card key={step.title} className="ring-1 ring-border">
              <CardHeader>
                <span className="mb-3 flex size-11 items-center justify-center rounded-xl bg-teal-deep font-heading text-base font-semibold text-ivory">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CardTitle className="text-base">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { AirportHowItWorks }
