import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import type { FaqItem } from "@/lib/blog/faq"

function BlogFaqAccordion({
  items,
  eyebrow,
  title,
}: {
  items: FaqItem[]
  eyebrow: string
  title: string
}) {
  if (items.length === 0) return null

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-ivory px-6 py-1 ring-1 ring-border open:pb-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-semibold text-charcoal">
                {item.question}
                <span
                  className="shrink-0 text-lg text-slate transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="text-sm leading-relaxed text-slate">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { BlogFaqAccordion }
