import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqContent } from "@/content/home"
import type { Locale } from "@/lib/i18n/config"

function Faq({ locale }: { locale: Locale }) {
  const t = faqContent[locale]

  return (
    <section id="faq" className="bg-ivory py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <Accordion className="rounded-2xl bg-white px-6 ring-1 ring-border sm:px-8">
          {t.items.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="py-5 font-heading text-base font-semibold text-charcoal hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export { Faq }
