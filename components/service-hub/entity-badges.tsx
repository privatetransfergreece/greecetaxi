import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import type { EntitySection } from "@/content/service-hubs"

function ServiceEntityBadges({ content }: { content: EntitySection }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          className="max-w-3xl"
        />

        <div className="flex flex-wrap gap-2.5">
          {content.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-ivory px-4 py-2 text-sm font-medium text-charcoal"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="max-w-2xl text-sm text-slate italic">{content.note}</p>
      </Container>
    </section>
  )
}

export { ServiceEntityBadges }
