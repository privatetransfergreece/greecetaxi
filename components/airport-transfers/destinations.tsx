import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { airportDestinationsContent } from "@/content/airport-transfers"
import type { Locale } from "@/lib/i18n/config"

function AirportDestinations({ locale }: { locale: Locale }) {
  const t = airportDestinationsContent[locale]

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          className="max-w-3xl"
        />

        <div className="flex flex-wrap gap-2.5">
          {t.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="max-w-2xl text-sm text-slate italic">{t.note}</p>
      </Container>
    </section>
  )
}

export { AirportDestinations }
