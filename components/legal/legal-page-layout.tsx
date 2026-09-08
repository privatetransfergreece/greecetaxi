import { Container } from "@/components/container"
import { SectionEyebrow } from "@/components/section-heading"

type LegalSection = {
  id: string
  title: string
  body: React.ReactNode
}

function LegalNote({
  children,
  label = "Note for business review:",
}: {
  children: React.ReactNode
  label?: string
}) {
  return (
    <div className="rounded-lg border border-coral/30 bg-coral/5 px-4 py-3 text-sm leading-relaxed text-charcoal">
      <strong className="font-semibold">{label} </strong>
      {children}
    </div>
  )
}

function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  lastUpdatedLabel = "Last Updated",
  onThisPageLabel = "On This Page",
  tocAriaLabel = "Table of contents",
  sections,
}: {
  eyebrow: string
  title: string
  lastUpdated: string
  lastUpdatedLabel?: string
  onThisPageLabel?: string
  tocAriaLabel?: string
  sections: LegalSection[]
}) {
  return (
    <>
      <section className="border-b border-border/70 bg-ivory py-16 sm:py-20">
        <Container className="flex flex-col gap-3">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="font-heading text-3xl leading-tight font-semibold text-charcoal sm:text-4xl">
            {title}
          </h1>
          <p className="text-sm font-medium text-slate">
            {lastUpdatedLabel}: {lastUpdated}
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <nav aria-label={tocAriaLabel} className="sticky top-24">
              <span className="mb-3 block text-xs font-semibold tracking-[0.14em] text-slate uppercase">
                {onThisPageLabel}
              </span>
              <ul className="flex flex-col gap-0.5 border-l border-border">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l-2 border-transparent px-4 py-1.5 text-sm text-slate transition-colors hover:border-teal hover:text-charcoal focus-visible:border-teal focus-visible:text-charcoal focus-visible:outline-none"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="flex max-w-3xl flex-col gap-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="flex scroll-mt-24 flex-col gap-4"
              >
                <h2 className="font-heading text-xl font-semibold text-charcoal sm:text-2xl">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed text-slate [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-charcoal [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1.5 [&_ul]:pl-5">
                  {section.body}
                </div>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  )
}

export { LegalPageLayout, LegalNote }
