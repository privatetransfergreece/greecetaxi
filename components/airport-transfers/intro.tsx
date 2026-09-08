import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { airportIntroContent } from "@/content/airport-transfers"
import type { Locale } from "@/lib/i18n/config"

function AirportIntro({ locale }: { locale: Locale }) {
  const t = airportIntroContent[locale]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} className="max-w-3xl" />

        <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-slate sm:text-lg">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { AirportIntro }
