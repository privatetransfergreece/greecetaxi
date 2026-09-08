/**
 * Single source of truth for currency across the CRM (quotes, invoices,
 * dashboard). Greece Taxi prices in EUR — nothing in this file should ever
 * be overridden per-component.
 */
export const CURRENCY = "EUR"

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: CURRENCY,
  }).format(amount)
}
