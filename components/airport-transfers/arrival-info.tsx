import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { airportArrivalContent } from "@/content/airport-transfers"
import type { Locale } from "@/lib/i18n/config"

function AirportArrivalInfo({ locale }: { locale: Locale }) {
  const t = airportArrivalContent[locale]

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} className="max-w-3xl" />

        <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-slate sm:text-lg">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="max-w-3xl rounded-lg border border-teal/30 bg-teal/5 px-4 py-3 text-sm leading-relaxed text-charcoal">
          {t.note}
        </div>
      </Container>
    </section>
  )
}

export { AirportArrivalInfo }
