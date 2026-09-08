import Link from "next/link"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"

type LinkPillItem = { label: string; href: string }

function LinkPills({
  eyebrow,
  title,
  description,
  items,
  note,
}: {
  eyebrow: string
  title: string
  description?: string
  items: LinkPillItem[]
  note?: string
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-3xl"
        />

        <div className="flex flex-wrap gap-2.5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-border bg-ivory px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-teal hover:bg-sand"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {note ? <p className="max-w-2xl text-sm text-slate italic">{note}</p> : null}
      </Container>
    </section>
  )
}

export { LinkPills }
export type { LinkPillItem }
