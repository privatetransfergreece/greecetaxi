import { randomBytes } from "crypto"

/**
 * Deterministic, human-readable reference derived from a lead's real
 * database id — never regenerated, so it stays stable across every email
 * resend or admin edit. A v4 UUID's first 8 hex characters (before the
 * first hyphen) are already random, so this is stable and collision-safe
 * in practice for a reference number.
 */
export function referenceFromId(id: string): string {
  const firstSegment = id.split("-")[0] ?? id.slice(0, 8)
  return `REF-${firstSegment.toUpperCase()}`
}

/** Unguessable token for a tokenized public invoice URL. */
export function generateAccessToken(): string {
  return randomBytes(24).toString("base64url")
}

/** Sequential-looking but non-guessable invoice number, e.g. INV-20260908-4F2A. */
export function generateInvoiceNumber(): string {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "")
  const randomPart = randomBytes(2).toString("hex").toUpperCase()
  return `INV-${datePart}-${randomPart}`
}
