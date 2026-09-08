import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import type { ServiceHubContent } from "@/content/service-hubs"

function ServiceOverview({ content }: { content: ServiceHubContent["overview"] }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-6">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} className="max-w-3xl" />

        <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-slate sm:text-lg">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { ServiceOverview }
