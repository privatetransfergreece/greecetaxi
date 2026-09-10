export type FaqItem = { question: string; answer: string }

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim()
}

/**
 * Extracts FAQ items from raw article HTML. Only a `<h3 id="faq-*">`
 * immediately followed by a `<p>` counts — this is the seed-script
 * authoring convention (see lib/blog docs / AGENTS notes), so it also
 * doubles as validation that a post's HTML followed it.
 */
export function extractFaqItems(html: string): FaqItem[] {
  const faqRegex = /<h3[^>]*id="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi

  const items: FaqItem[] = []
  let match: RegExpExecArray | null

  while ((match = faqRegex.exec(html)) !== null) {
    const question = stripTags(match[1])
    const answer = stripTags(match[2])

    if (question && answer) {
      items.push({ question, answer })
    }
  }

  return items
}
