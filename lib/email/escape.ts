/**
 * HTML-escapes user-supplied content before it is ever interpolated into an
 * email template. Every customer-entered string (name, locations, notes,
 * phone, flight number, etc.) must be passed through this before reaching
 * an email's HTML — see lib/email/templates/*.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/** Escapes a value that may be null/undefined/number, returning a fallback for empty values. */
export function escapeOrDash(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === "") return "—"
  return escapeHtml(String(value))
}
