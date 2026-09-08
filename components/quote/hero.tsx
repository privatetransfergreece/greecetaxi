import { Container } from "@/components/container"
import { SectionEyebrow } from "@/components/section-heading"
import type { QuotePageContent } from "@/content/quote"

function QuoteHero({ content }: { content: QuotePageContent["hero"] }) {
  return (
    <section className="border-b border-border/70 bg-ivory py-14 sm:py-16">
      <Container className="flex max-w-2xl flex-col gap-3">
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
        <h1 className="font-heading text-3xl leading-tight font-semibold text-charcoal sm:text-4xl">
          {content.title}
        </h1>
        <p className="text-base leading-relaxed text-slate sm:text-lg">
          {content.description}
        </p>
      </Container>
    </section>
  )
}

export { QuoteHero }
