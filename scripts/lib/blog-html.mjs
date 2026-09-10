// Shared HTML-block generators for blog seed scripts (scripts/seed-blog.mjs).
// Every class used here already appears elsewhere in the compiled site
// (components/lead-cta.tsx, components/location/related-links.tsx, etc.),
// so no extra Tailwind scanning of this file is required.
//
// These generate Greece Private Transfers HTML — do not port this file to
// another project without replacing the hrefs/copy.

/** A commercial CTA block linking to a real transfer/service page. */
export function cta({ heading, description, label, href }) {
  return `
<div class="not-prose my-8 rounded-2xl bg-teal-deep p-6 text-ivory sm:p-8">
  <p class="text-lg font-semibold text-ivory">${heading}</p>
  <p class="mt-2 text-sm leading-relaxed text-ivory/80">${description}</p>
  <a href="${href}" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-coral px-5 py-2.5 text-sm font-semibold text-white hover:bg-coral/90">${label}</a>
</div>`.trim();
}

/** A short list of related Greece Private Transfers pages. */
export function related({ title, links }) {
  const items = links
    .map(
      (link) =>
        `<li><a href="${link.href}" class="font-semibold text-teal hover:text-teal-deep">${link.label}</a>${link.description ? ` — ${link.description}` : ""}</li>`
    )
    .join("\n    ");

  return `
<div class="not-prose my-8 rounded-2xl bg-ivory p-6 ring-1 ring-border">
  <p class="font-heading text-sm font-semibold text-charcoal uppercase tracking-[0.08em]">${title}</p>
  <ul class="mt-3 flex flex-col gap-2 text-sm text-slate">
    ${items}
  </ul>
</div>`.trim();
}
