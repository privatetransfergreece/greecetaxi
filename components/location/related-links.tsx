import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"

type RelatedLinkItem = {
  label: string
  href: string
  description: string
  icon: LucideIcon
}

function RelatedLinks({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: RelatedLinkItem[]
}) {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} className="max-w-2xl" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ label, href, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-deep/10"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal-deep/10 text-teal-deep">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="font-heading text-base font-semibold text-charcoal">
                {label}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{description}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                {label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { RelatedLinks }
export type { RelatedLinkItem }
