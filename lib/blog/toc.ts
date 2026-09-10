export type TocHeading = { id: string; text: string; level: 2 | 3 }

/**
 * Extracts a table of contents from `<h2 id="...">`/`<h3 id="...">` tags in
 * raw article HTML. Headings without an explicit id are skipped — there's
 * nothing for the link to scroll to.
 */
export function extractHeadings(html: string): TocHeading[] {
  const headingRegex = /<h([23])[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/gi

  const headings: TocHeading[] = []
  let match: RegExpExecArray | null

  while ((match = headingRegex.exec(html)) !== null) {
    const level = Number(match[1]) as 2 | 3
    const id = match[2]
    const text = match[3].replace(/<[^>]+>/g, "").trim()

    if (id && text) {
      headings.push({ id, text, level })
    }
  }

  return headings
}
