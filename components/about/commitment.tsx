import { CheckCircle2 } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { commitmentContent } from "@/content/about"
import type { Locale } from "@/lib/i18n/config"

function Commitment({ locale }: { locale: Locale }) {
  const t = commitmentContent[locale]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="center"
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="mx-auto grid w-full max-w-3xl gap-4 rounded-2xl bg-ivory p-6 ring-1 ring-border sm:grid-cols-2 sm:p-8">
          {t.items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" />
              <p className="text-sm leading-relaxed text-charcoal sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Commitment }
