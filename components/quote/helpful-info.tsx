import { CheckCircle2 } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import type { QuotePageContent } from "@/content/quote"

function HelpfulInfo({ content }: { content: QuotePageContent["helpfulInfo"] }) {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          className="max-w-2xl"
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {content.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl bg-white p-4 text-sm text-charcoal ring-1 ring-border"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-deep" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export { HelpfulInfo }
