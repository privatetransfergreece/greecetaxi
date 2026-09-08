import type { Locale } from "@/lib/i18n/config"
import type { Lead, Invoice } from "@/lib/supabase/types"
import { siteConfig } from "@/lib/site-config"
import { formatCurrency } from "@/lib/currency"
import { referenceFromId } from "@/lib/reference"
import { escapeHtml, escapeOrDash } from "@/lib/email/escape"
import { formatTravelDate, formatTravelTime, formatTransferType } from "@/lib/email/format"
import { renderEmailShell, renderDetailTable, renderSectionTitle, renderButton } from "@/lib/email/shell"

export type EmailTemplateResult = { subject: string; html: string; text: string }

function customerDetailRows(lead: Lead, locale: Locale) {
  const rows = [
    { label: locale === "el" ? "Όνομα" : "Name", value: escapeHtml(lead.full_name) },
    { label: locale === "el" ? "Email" : "Email", value: escapeHtml(lead.email) },
  ]
  if (lead.phone) rows.push({ label: locale === "el" ? "Τηλέφωνο" : "Phone", value: escapeHtml(lead.phone) })
  if (lead.country) rows.push({ label: locale === "el" ? "Χώρα" : "Country", value: escapeHtml(lead.country) })
  return rows
}

function tripDetailRows(lead: Lead, locale: Locale) {
  const rows = [
    { label: locale === "el" ? "Τύπος Μεταφοράς" : "Transfer Type", value: escapeHtml(formatTransferType(lead.transfer_type, locale)) },
    { label: locale === "el" ? "Παραλαβή" : "Pickup", value: escapeHtml(lead.pickup_location) },
    { label: locale === "el" ? "Προορισμός" : "Drop-off", value: escapeHtml(lead.dropoff_location) },
    { label: locale === "el" ? "Ημερομηνία" : "Date", value: escapeHtml(formatTravelDate(lead.travel_date, locale)) },
    { label: locale === "el" ? "Ώρα" : "Time", value: escapeHtml(formatTravelTime(lead.pickup_time)) },
    {
      label: locale === "el" ? "Επιβάτες" : "Passengers",
      value: escapeHtml(
        `${lead.adults} ${locale === "el" ? "ενήλικες" : "adults"}` +
          (lead.children ? `, ${lead.children} ${locale === "el" ? "παιδιά" : "children"}` : "") +
          (lead.infants ? `, ${lead.infants} ${locale === "el" ? "βρέφη" : "infants"}` : "")
      ),
    },
    { label: locale === "el" ? "Αποσκευές" : "Luggage", value: escapeHtml(String(lead.luggage)) },
  ]

  if (lead.return_transfer) {
    rows.push({
      label: locale === "el" ? "Επιστροφή" : "Return Journey",
      value: escapeHtml(
        `${lead.return_pickup_location || lead.dropoff_location} → ${lead.return_dropoff_location || lead.pickup_location}, ` +
          `${lead.return_date ? formatTravelDate(lead.return_date, locale) : ""} ${lead.return_time ? formatTravelTime(lead.return_time) : ""}`.trim()
      ),
    })
  }

  return rows
}

function additionalDetailRows(lead: Lead, locale: Locale) {
  const rows: { label: string; value: string }[] = []
  if (lead.flight_number) rows.push({ label: locale === "el" ? "Αριθμός Πτήσης" : "Flight Number", value: escapeHtml(lead.flight_number) })
  if (lead.ferry_info) rows.push({ label: locale === "el" ? "Στοιχεία Ferry" : "Ferry Info", value: escapeHtml(lead.ferry_info) })
  if (lead.hotel_name) rows.push({ label: locale === "el" ? "Ξενοδοχείο" : "Hotel", value: escapeHtml(lead.hotel_name) })
  return rows
}

function textFromRows(rows: { label: string; value: string }[]): string {
  return rows.map((r) => `${r.label}: ${stripTags(r.value)}`).join("\n")
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "")
}

// ---------------------------------------------------------------------------
// 1. New lead → admin
// ---------------------------------------------------------------------------
export function adminNewLeadEmail(lead: Lead): EmailTemplateResult {
  const ref = referenceFromId(lead.id)
  const subject = `New Transfer Request – ${ref}`
  const dashboardUrl = `${siteConfig.url}/admin/leads/${lead.id}`

  const bodyHtml = `
    <p style="margin:0 0 16px 0;font-size:14px;color:#5b6b6e;">Reference <strong>${ref}</strong> · submitted ${escapeHtml(new Date(lead.created_at).toLocaleString("en-GB"))}</p>
    ${renderSectionTitle("Customer")}
    ${renderDetailTable(customerDetailRows(lead, "en"))}
    ${renderSectionTitle("Trip Details")}
    ${renderDetailTable(tripDetailRows(lead, "en"))}
    ${additionalDetailRows(lead, "en").length ? renderSectionTitle("Additional Details") + renderDetailTable(additionalDetailRows(lead, "en")) : ""}
    ${lead.special_requests ? renderSectionTitle("Special Requests") + `<p style="margin:0 0 16px 0;font-size:14px;color:#243033;white-space:pre-wrap;">${escapeHtml(lead.special_requests)}</p>` : ""}
    ${renderButton("Open in Admin Dashboard", dashboardUrl)}
    <p style="margin:0;font-size:12px;color:#5b6b6e;">Reply directly to this email to respond to the customer.</p>
  `

  const html = renderEmailShell({ heading: `New transfer request — ${ref}`, bodyHtml, locale: "en" })
  const text = `New transfer request — ${ref}\n\nCustomer:\n${textFromRows(customerDetailRows(lead, "en"))}\n\nTrip:\n${textFromRows(tripDetailRows(lead, "en"))}\n\nOpen in admin: ${dashboardUrl}`

  return { subject, html, text }
}

// ---------------------------------------------------------------------------
// 2. Request received → customer
// ---------------------------------------------------------------------------
export function customerRequestReceivedEmail(lead: Lead): EmailTemplateResult {
  const locale = lead.locale
  const ref = referenceFromId(lead.id)
  const subject =
    locale === "el" ? `Λάβαμε το Αίτημά σας για Μεταφορά – ${ref}` : `We Received Your Transfer Request – ${ref}`

  const intro =
    locale === "el"
      ? `Γεια σας ${escapeHtml(lead.full_name)}, λάβαμε το αίτημά σας για ιδιωτική μεταφορά. Αυτό <strong>δεν είναι</strong> επιβεβαίωση κράτησης — η ομάδα μας θα ελέγξει τα στοιχεία και θα επικοινωνήσει μαζί σας με προσφορά.`
      : `Hi ${escapeHtml(lead.full_name)}, we've received your private transfer request. This is <strong>not</strong> a confirmed booking — our team will review the details and get back to you with a quote.`

  const statusBadge =
    locale === "el"
      ? `<p style="display:inline-block;margin:0 0 16px 0;padding:4px 10px;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#123c43;background-color:#fcfaf5;border:1px solid #e4e0d6;border-radius:999px;">Αίτημα Ελήφθη</p>`
      : `<p style="display:inline-block;margin:0 0 16px 0;padding:4px 10px;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#123c43;background-color:#fcfaf5;border:1px solid #e4e0d6;border-radius:999px;">Request Received</p>`

  const nextSteps =
    locale === "el"
      ? "Τι ακολουθεί: θα εξετάσουμε το αίτημά σας και θα σας στείλουμε προσφορά μέσω email."
      : "What happens next: we'll review your request and send your quote by email."

  const bodyHtml = `
    ${statusBadge}
    <p style="margin:0 0 16px 0;font-size:14px;color:#243033;line-height:1.6;">${intro}</p>
    <p style="margin:0 0 16px 0;font-size:13px;color:#5b6b6e;">${locale === "el" ? "Αριθμός αναφοράς" : "Reference number"}: <strong>${ref}</strong></p>
    ${renderSectionTitle(locale === "el" ? "Στοιχεία Ταξιδιού" : "Your Trip Details")}
    ${renderDetailTable(tripDetailRows(lead, locale))}
    <p style="margin:0 0 8px 0;font-size:14px;color:#243033;">${nextSteps}</p>
    <p style="margin:0;font-size:13px;color:#5b6b6e;">${locale === "el" ? "Ερωτήσεις; Απαντήστε σε αυτό το email." : "Questions? Just reply to this email."}</p>
  `

  const html = renderEmailShell({ heading: subject, bodyHtml, locale })
  const text = `${stripTags(intro)}\n\nReference: ${ref}\n\n${textFromRows(tripDetailRows(lead, locale))}\n\n${nextSteps}`

  return { subject, html, text }
}

// ---------------------------------------------------------------------------
// 3. Quote sent → customer
// ---------------------------------------------------------------------------
export function customerQuoteSentEmail(lead: Lead): EmailTemplateResult {
  const locale = lead.locale
  const ref = referenceFromId(lead.id)
  const subject = locale === "el" ? `Η Προσφορά σας για Μεταφορά – ${ref}` : `Your Transfer Quote – ${ref}`

  const amount = lead.quoted_amount != null ? formatCurrency(lead.quoted_amount) : null

  const intro =
    locale === "el"
      ? `Γεια σας ${escapeHtml(lead.full_name)}, ετοιμάσαμε την προσφορά σας για το ταξίδι σας παρακάτω.`
      : `Hi ${escapeHtml(lead.full_name)}, here's your quote for the trip below.`

  const bodyHtml = `
    <p style="margin:0 0 16px 0;font-size:14px;color:#243033;line-height:1.6;">${intro}</p>
    <p style="margin:0 0 16px 0;font-size:13px;color:#5b6b6e;">${locale === "el" ? "Αριθμός αναφοράς" : "Reference number"}: <strong>${ref}</strong></p>
    ${renderSectionTitle(locale === "el" ? "Στοιχεία Ταξιδιού" : "Trip Details")}
    ${renderDetailTable(tripDetailRows(lead, locale))}
    ${
      amount
        ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 20px 0;"><tr><td style="padding:14px 16px;background-color:#123c43;border-radius:8px;"><span style="font-size:12px;color:#fcfaf5;text-transform:uppercase;letter-spacing:0.05em;">${locale === "el" ? "Προσφερόμενο Ποσό" : "Quoted Total"}</span><br/><span style="font-size:22px;font-weight:700;color:#ffffff;">${amount}</span></td></tr></table>`
        : ""
    }
    ${lead.admin_notes ? renderSectionTitle(locale === "el" ? "Σημειώσεις" : "Notes") + `<p style="margin:0 0 16px 0;font-size:14px;color:#243033;white-space:pre-wrap;">${escapeHtml(lead.admin_notes)}</p>` : ""}
    <p style="margin:0;font-size:13px;color:#5b6b6e;">${locale === "el" ? "Απαντήστε σε αυτό το email για να επιβεβαιώσετε ή για ερωτήσεις." : "Reply to this email to confirm or ask any questions."}</p>
  `

  const html = renderEmailShell({ heading: subject, bodyHtml, locale })
  const text = `${stripTags(intro)}\n\nReference: ${ref}\n\n${textFromRows(tripDetailRows(lead, locale))}${amount ? `\n\nQuoted total: ${amount}` : ""}`

  return { subject, html, text }
}

// ---------------------------------------------------------------------------
// 4. Booking confirmed → customer
// ---------------------------------------------------------------------------
export function customerBookingConfirmedEmail(lead: Lead): EmailTemplateResult {
  const locale = lead.locale
  const ref = referenceFromId(lead.id)
  const subject =
    locale === "el"
      ? `Η Κράτησή σας στη ${siteConfig.name} Επιβεβαιώθηκε – ${ref}`
      : `Your ${siteConfig.name} Booking Is Confirmed – ${ref}`

  const amount = lead.quoted_amount != null ? formatCurrency(lead.quoted_amount) : null

  const statusBadge =
    locale === "el"
      ? `<p style="display:inline-block;margin:0 0 16px 0;padding:4px 10px;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#ffffff;background-color:#176b70;border-radius:999px;">Κράτηση Επιβεβαιωμένη</p>`
      : `<p style="display:inline-block;margin:0 0 16px 0;padding:4px 10px;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#ffffff;background-color:#176b70;border-radius:999px;">Booking Confirmed</p>`

  const intro =
    locale === "el"
      ? `Γεια σας ${escapeHtml(lead.full_name)}, η μεταφορά σας είναι επιβεβαιωμένη. Δείτε τα τελικά στοιχεία παρακάτω.`
      : `Hi ${escapeHtml(lead.full_name)}, your transfer is confirmed. Here are the final details.`

  const bodyHtml = `
    ${statusBadge}
    <p style="margin:0 0 16px 0;font-size:14px;color:#243033;line-height:1.6;">${intro}</p>
    <p style="margin:0 0 16px 0;font-size:13px;color:#5b6b6e;">${locale === "el" ? "Αριθμός αναφοράς" : "Reference number"}: <strong>${ref}</strong></p>
    ${renderSectionTitle(locale === "el" ? "Επιβεβαιωμένα Στοιχεία" : "Confirmed Details")}
    ${renderDetailTable(tripDetailRows(lead, locale))}
    ${
      amount
        ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 20px 0;"><tr><td style="padding:14px 16px;background-color:#123c43;border-radius:8px;"><span style="font-size:12px;color:#fcfaf5;text-transform:uppercase;letter-spacing:0.05em;">${locale === "el" ? "Σύνολο" : "Total"}</span><br/><span style="font-size:22px;font-weight:700;color:#ffffff;">${amount}</span></td></tr></table>`
        : ""
    }
    ${lead.admin_notes ? renderSectionTitle(locale === "el" ? "Σημειώσεις" : "Notes") + `<p style="margin:0 0 16px 0;font-size:14px;color:#243033;white-space:pre-wrap;">${escapeHtml(lead.admin_notes)}</p>` : ""}
    <p style="margin:0;font-size:13px;color:#5b6b6e;">${locale === "el" ? "Ερωτήσεις σχετικά με τη μεταφορά σας; Απαντήστε σε αυτό το email." : "Questions about your transfer? Just reply to this email."}</p>
  `

  const html = renderEmailShell({ heading: subject, bodyHtml, locale })
  const text = `${stripTags(intro)}\n\nReference: ${ref}\n\n${textFromRows(tripDetailRows(lead, locale))}${amount ? `\n\nTotal: ${amount}` : ""}`

  return { subject, html, text }
}

// ---------------------------------------------------------------------------
// 5. Booking confirmed → admin (internal record)
// ---------------------------------------------------------------------------
export function adminBookingConfirmedEmail(lead: Lead): EmailTemplateResult {
  const ref = referenceFromId(lead.id)
  const subject = `Booking Confirmed – ${ref}`
  const dashboardUrl = `${siteConfig.url}/admin/leads/${lead.id}`

  const bodyHtml = `
    <p style="margin:0 0 16px 0;font-size:14px;color:#243033;">Booking ${ref} was confirmed and the customer confirmation email was sent.</p>
    ${renderDetailTable(customerDetailRows(lead, "en"))}
    ${renderDetailTable(tripDetailRows(lead, "en"))}
    ${renderButton("Open in Admin Dashboard", dashboardUrl)}
  `

  const html = renderEmailShell({ heading: subject, bodyHtml, locale: "en" })
  const text = `Booking ${ref} confirmed.\n\n${textFromRows(customerDetailRows(lead, "en"))}\n\n${textFromRows(tripDetailRows(lead, "en"))}\n\n${dashboardUrl}`

  return { subject, html, text }
}

// ---------------------------------------------------------------------------
// 6. Admin custom / compose email → customer
// ---------------------------------------------------------------------------
export function adminCustomEmail(input: { subject: string; message: string; locale: Locale }): EmailTemplateResult {
  const bodyHtml = `<div style="font-size:14px;color:#243033;line-height:1.7;white-space:pre-wrap;">${escapeHtml(input.message)}</div>`
  const html = renderEmailShell({ heading: input.subject, bodyHtml, locale: input.locale })
  const text = input.message

  return { subject: input.subject, html, text }
}

// ---------------------------------------------------------------------------
// 7. Invoice email → customer
// ---------------------------------------------------------------------------
export function invoiceEmail(input: { invoice: Invoice; locale: Locale }): EmailTemplateResult {
  const { invoice, locale } = input
  const subject =
    locale === "el" ? `Το Τιμολόγιό σας – ${invoice.invoice_number}` : `Your Invoice – ${invoice.invoice_number}`
  const invoiceUrl = `${siteConfig.url}/invoice/${invoice.access_token}`

  const lineItemsHtml = invoice.line_items
    .map(
      (item) =>
        `<tr><td style="padding:6px 0;font-size:13px;color:#243033;">${escapeOrDash(item.description)}</td><td style="padding:6px 0;font-size:13px;color:#243033;text-align:right;">${formatCurrency(item.amount)}</td></tr>`
    )
    .join("")

  const bodyHtml = `
    <p style="margin:0 0 16px 0;font-size:14px;color:#243033;">${locale === "el" ? "Γεια σας" : "Hi"} ${escapeHtml(invoice.customer_name)}, ${locale === "el" ? "παρακαλώ βρείτε το τιμολόγιό σας παρακάτω." : "please find your invoice below."}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px 0;border:1px solid #e4e0d6;border-radius:8px;">
      <tr><td style="padding:14px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${lineItemsHtml}</table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;border-top:1px solid #e4e0d6;padding-top:8px;">
          <tr><td style="padding-top:8px;font-size:14px;font-weight:700;color:#123c43;">${locale === "el" ? "Σύνολο" : "Total"}</td><td style="padding-top:8px;font-size:14px;font-weight:700;color:#123c43;text-align:right;">${formatCurrency(invoice.amount)}</td></tr>
        </table>
      </td></tr>
    </table>
    ${renderButton(locale === "el" ? "Προβολή Τιμολογίου" : "View Invoice", invoiceUrl)}
  `

  const html = renderEmailShell({ heading: subject, bodyHtml, locale })
  const text = `${subject}\n\n${invoice.line_items.map((i) => `${i.description}: ${formatCurrency(i.amount)}`).join("\n")}\n\nTotal: ${formatCurrency(invoice.amount)}\n\n${invoiceUrl}`

  return { subject, html, text }
}
