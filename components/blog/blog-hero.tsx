import { Container } from "@/components/container"
import { SectionEyebrow } from "@/components/section-heading"

function BlogHubHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="bg-teal-deep py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <SectionEyebrow className="text-sand">{eyebrow}</SectionEyebrow>
        <h1 className="max-w-2xl font-heading text-3xl leading-tight font-semibold text-ivory sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{description}</p>
      </Container>
    </section>
  )
}

function BlogArticleHero({
  category,
  title,
  dateLabel,
  readTime,
  authorName,
}: {
  category: string
  title: string
  dateLabel: string
  readTime: string | null
  authorName: string | null
}) {
  return (
    <section className="bg-teal-deep py-14 sm:py-18">
      <Container className="flex max-w-3xl flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ivory/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-sand uppercase ring-1 ring-ivory/15">
          {category}
        </span>
        <h1 className="font-heading text-2xl leading-tight font-semibold text-ivory sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ivory/70">
          <span>{dateLabel}</span>
          {readTime ? (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{readTime}</span>
            </>
          ) : null}
          {authorName ? (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{authorName}</span>
            </>
          ) : null}
        </div>
      </Container>
    </section>
  )
}

export { BlogHubHero, BlogArticleHero }
