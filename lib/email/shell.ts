import { siteConfig } from "@/lib/site-config"
import { escapeHtml } from "@/lib/email/escape"

const COLORS = {
  tealDeep: "#123c43",
  coral: "#e8755c",
  ivory: "#fcfaf5",
  charcoal: "#243033",
  slate: "#5b6b6e",
  border: "#e4e0d6",
}

export type EmailShellOptions = {
  preheader?: string
  heading: string
  bodyHtml: string
  locale?: "en" | "el"
}

/**
 * One reusable, table-based, email-safe branded shell. Every template in
 * lib/email/templates builds its body HTML and passes it here rather than
 * hand-rolling its own header/footer. No inline SVG (some clients strip it)
 * and no external images — a simple text wordmark keeps this reliable
 * across clients.
 */
export function renderEmailShell({ preheader, heading, bodyHtml, locale = "en" }: EmailShellOptions): string {
  const footerLine = locale === "el" ? "Ιδιωτικές μεταφορές σε όλη την Ελλάδα" : "Private transfers across Greece"
  const rightsLine =
    locale === "el"
      ? `© ${new Date().getFullYear()} ${escapeHtml(siteConfig.name)}. Με επιφύλαξη παντός δικαιώματος.`
      : `© ${new Date().getFullYear()} ${escapeHtml(siteConfig.name)}. All rights reserved.`

  return `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.ivory};font-family:Arial, Helvetica, sans-serif;">
${preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>` : ""}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.ivory};padding:24px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid ${COLORS.border};">
        <tr>
          <td style="background-color:${COLORS.tealDeep};padding:24px 28px;">
            <span style="font-size:18px;font-weight:700;color:#ffffff;letter-spacing:0.01em;">${escapeHtml(siteConfig.name)}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:28px;">
            <h1 style="margin:0 0 16px 0;font-size:20px;line-height:1.35;color:${COLORS.charcoal};">${escapeHtml(heading)}</h1>
            ${bodyHtml}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 28px;background-color:${COLORS.ivory};border-top:1px solid ${COLORS.border};">
            <p style="margin:0 0 6px 0;font-size:12px;color:${COLORS.slate};">${escapeHtml(footerLine)}</p>
            <p style="margin:0 0 6px 0;font-size:12px;color:${COLORS.slate};">
              <a href="${siteConfig.url}" style="color:${COLORS.coral};text-decoration:none;">${siteConfig.url.replace(/^https?:\/\//, "")}</a>
              &nbsp;·&nbsp;
              <a href="mailto:${siteConfig.contactEmail}" style="color:${COLORS.coral};text-decoration:none;">${siteConfig.contactEmail}</a>
            </p>
            <p style="margin:0;font-size:11px;color:${COLORS.slate};">${rightsLine}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

/** Renders a two-column "label / value" detail table used throughout the templates. */
export function renderDetailTable(rows: { label: string; value: string }[]): string {
  const rowsHtml = rows
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:6px 12px 6px 0;font-size:13px;color:${COLORS.slate};white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:6px 0;font-size:13px;color:${COLORS.charcoal};font-weight:600;">${value}</td>
        </tr>`
    )
    .join("")

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px 0;border:1px solid ${COLORS.border};border-radius:8px;background-color:${COLORS.ivory};">
    <tr><td style="padding:14px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table>
    </td></tr>
  </table>`
}

export function renderSectionTitle(title: string): string {
  return `<h2 style="margin:24px 0 10px 0;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${COLORS.tealDeep};">${escapeHtml(title)}</h2>`
}

export function renderButton(label: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:20px 0;">
    <tr>
      <td style="border-radius:8px;background-color:${COLORS.coral};">
        <a href="${href}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:8px;">${escapeHtml(label)}</a>
      </td>
    </tr>
  </table>`
}

export { COLORS as emailColors }
