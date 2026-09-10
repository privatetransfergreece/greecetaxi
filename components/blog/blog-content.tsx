/**
 * Renders a post's stored HTML. Content is authored exclusively through
 * seed scripts (see scripts/seed-blog.mjs) — there is no public or admin
 * write path to this column — so dangerouslySetInnerHTML here is a
 * deliberate, trusted-source choice, not an oversight.
 */
function BlogContent({ html }: { html: string }) {
  return <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
}

export { BlogContent }
