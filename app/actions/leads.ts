"use server"

import { revalidatePath } from "next/cache"

import { verifyAdminSession } from "@/lib/auth/dal"
import { createAdminClient } from "@/lib/supabase/admin-client"
import type { Lead, LeadStatus, LeadUpdate } from "@/lib/supabase/types"
import { sendAndLog } from "@/lib/email/send"
import {
  customerRequestReceivedEmail,
  customerQuoteSentEmail,
  customerBookingConfirmedEmail,
  adminBookingConfirmedEmail,
  adminCustomEmail,
} from "@/lib/email/templates"
import { siteConfig } from "@/lib/site-config"

export type ActionResult = { success: true; message: string } | { success: false; message: string }

const EDITABLE_FIELDS = [
  "full_name",
  "email",
  "phone",
  "country",
  "transfer_type",
  "pickup_location",
  "dropoff_location",
  "travel_date",
  "pickup_time",
  "return_transfer",
  "return_pickup_location",
  "return_dropoff_location",
  "return_date",
  "return_time",
  "adults",
  "children",
  "infants",
  "luggage",
  "flight_number",
  "ferry_info",
  "hotel_name",
  "special_requests",
  "quoted_amount",
  "admin_notes",
] as const

type EditableField = (typeof EDITABLE_FIELDS)[number]

function buildUpdateFromFormData(formData: FormData): LeadUpdate {
  const update: LeadUpdate = {}

  // An unchecked checkbox is omitted from FormData entirely, so
  // return_transfer must be read unconditionally rather than skipped when
  // absent — otherwise unchecking it would silently fail to save.
  update.return_transfer = formData.get("return_transfer") === "true"

  for (const field of EDITABLE_FIELDS) {
    if (field === "return_transfer") continue
    if (!formData.has(field)) continue
    const raw = formData.get(field)
    if (field === "adults" || field === "children" || field === "infants" || field === "luggage") {
      const parsed = Number.parseInt(String(raw), 10)
      update[field] = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0
      continue
    }
    if (field === "quoted_amount") {
      const str = String(raw ?? "").trim()
      update.quoted_amount = str === "" ? null : Number.parseFloat(str)
      continue
    }

    const str = String(raw ?? "").trim()
    ;(update as Record<EditableField, unknown>)[field] = str === "" ? null : str
  }

  return update
}

async function logActivity(leadId: string, action: string, detail?: Record<string, unknown>) {
  const supabase = createAdminClient()
  await supabase.from("lead_activity").insert({ lead_id: leadId, action, detail: detail ?? null })
}

function diffFields(before: Lead, update: LeadUpdate): Record<string, { from: unknown; to: unknown }> {
  const diff: Record<string, { from: unknown; to: unknown }> = {}
  for (const [key, value] of Object.entries(update)) {
    const typedKey = key as keyof Lead
    if (before[typedKey] !== value) {
      diff[key] = { from: before[typedKey], to: value }
    }
  }
  return diff
}

/** Saves admin edits to a lead (trip details, price, notes) without changing its status or sending anything. */
export async function updateLead(leadId: string, formData: FormData): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()

  const { data: existing } = await supabase.from("leads").select("*").eq("id", leadId).maybeSingle()
  if (!existing) return { success: false, message: "Lead not found." }

  const update = buildUpdateFromFormData(formData)
  if (!update.full_name || !update.email) {
    return { success: false, message: "Name and email are required." }
  }

  const { error } = await supabase.from("leads").update(update).eq("id", leadId)
  if (error) {
    console.error("[leads] updateLead failed:", error)
    return { success: false, message: "Could not save changes." }
  }

  const diff = diffFields(existing, update)
  if (Object.keys(diff).length > 0) {
    await logActivity(leadId, "edited", { fields: diff })
  }

  revalidatePath(`/admin/leads/${leadId}`)
  revalidatePath("/admin/leads")
  revalidatePath("/admin")

  return { success: true, message: "Changes saved." }
}

async function setStatus(leadId: string, status: LeadStatus, action: string): Promise<Lead | null> {
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("leads").update({ status }).eq("id", leadId).select().single()
  if (error || !data) {
    console.error(`[leads] Failed to set status ${status}:`, error)
    return null
  }
  await logActivity(leadId, action, { status })
  return data
}

/** Marks the lead as quoted and emails the customer the quoted amount. Requires a price to already be set (via updateLead) first. */
export async function sendQuote(leadId: string): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data: lead } = await supabase.from("leads").select("*").eq("id", leadId).maybeSingle()

  if (!lead) return { success: false, message: "Lead not found." }
  if (lead.quoted_amount == null) return { success: false, message: "Set a quoted amount before sending." }

  const updated = await setStatus(leadId, "quoted", "quote_sent")
  if (!updated) return { success: false, message: "Could not update status." }

  const emailResult = await sendAndLog({
    type: "customer_quote_sent",
    leadId,
    to: updated.email,
    replyTo: process.env.REPLY_TO_EMAIL || process.env.ADMIN_EMAIL || siteConfig.contactEmail,
    template: customerQuoteSentEmail(updated),
  })

  revalidatePath(`/admin/leads/${leadId}`)
  revalidatePath("/admin/leads")
  revalidatePath("/admin")

  return emailResult.success
    ? { success: true, message: "Quote sent to customer." }
    : { success: false, message: `Quote saved, but the email could not be delivered (${emailResult.error}).` }
}

/**
 * Confirm & Send: saves any pending edits, sets status to confirmed, and
 * emails the customer the final (just-saved) details. This is the only path
 * that sends a "booking confirmed" email, so the email always reflects the
 * admin-approved version of the booking, never the raw customer submission.
 */
export async function confirmAndSend(leadId: string, formData: FormData): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()

  const { data: existing } = await supabase.from("leads").select("*").eq("id", leadId).maybeSingle()
  if (!existing) return { success: false, message: "Lead not found." }

  const update = buildUpdateFromFormData(formData)
  if (!update.full_name || !update.email) {
    return { success: false, message: "Name and email are required." }
  }

  const { data: confirmed, error } = await supabase
    .from("leads")
    .update({ ...update, status: "confirmed" })
    .eq("id", leadId)
    .select()
    .single()

  if (error || !confirmed) {
    console.error("[leads] confirmAndSend failed:", error)
    return { success: false, message: "Could not confirm the booking." }
  }

  const diff = diffFields(existing, update)
  await logActivity(leadId, "confirmed", { fields: diff })

  const customerResult = await sendAndLog({
    type: "customer_booking_confirmed",
    leadId,
    to: confirmed.email,
    replyTo: process.env.REPLY_TO_EMAIL || process.env.ADMIN_EMAIL || siteConfig.contactEmail,
    template: customerBookingConfirmedEmail(confirmed),
  })

  const adminEmail = process.env.ADMIN_EMAIL
  if (adminEmail) {
    await sendAndLog({
      type: "admin_booking_confirmed",
      leadId,
      to: adminEmail,
      template: adminBookingConfirmedEmail(confirmed),
    })
  }

  revalidatePath(`/admin/leads/${leadId}`)
  revalidatePath("/admin/leads")
  revalidatePath("/admin")

  return customerResult.success
    ? { success: true, message: "Booking confirmed and customer email sent." }
    : { success: false, message: `Booking confirmed, but the customer email could not be delivered (${customerResult.error}). You can retry from the activity log.` }
}

export async function cancelLead(leadId: string, reason?: string): Promise<ActionResult> {
  await verifyAdminSession()
  const updated = await setStatus(leadId, "cancelled", "cancelled")
  if (!updated) return { success: false, message: "Could not cancel the request." }
  if (reason) await logActivity(leadId, "cancelled", { reason })

  revalidatePath(`/admin/leads/${leadId}`)
  revalidatePath("/admin/leads")
  revalidatePath("/admin")

  return { success: true, message: "Request cancelled." }
}

/** Retries a previously failed customer-facing email of the given type using the lead's current data. */
export async function resendEmail(
  leadId: string,
  type: "customer_request_received" | "customer_quote_sent" | "customer_booking_confirmed"
): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data: lead } = await supabase.from("leads").select("*").eq("id", leadId).maybeSingle()
  if (!lead) return { success: false, message: "Lead not found." }

  const template =
    type === "customer_request_received"
      ? customerRequestReceivedEmail(lead)
      : type === "customer_quote_sent"
        ? customerQuoteSentEmail(lead)
        : customerBookingConfirmedEmail(lead)

  const result = await sendAndLog({
    type,
    leadId,
    to: lead.email,
    replyTo: process.env.REPLY_TO_EMAIL || process.env.ADMIN_EMAIL || siteConfig.contactEmail,
    template,
  })

  revalidatePath(`/admin/leads/${leadId}`)

  return result.success
    ? { success: true, message: "Email resent." }
    : { success: false, message: `Resend failed (${result.error}).` }
}

/** Admin "compose email" — sends a free-text branded email to the customer. */
export async function composeEmail(leadId: string, formData: FormData): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data: lead } = await supabase.from("leads").select("*").eq("id", leadId).maybeSingle()
  if (!lead) return { success: false, message: "Lead not found." }

  const subject = String(formData.get("subject") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  if (!subject || !message) return { success: false, message: "Subject and message are required." }

  const result = await sendAndLog({
    type: "admin_custom",
    leadId,
    to: lead.email,
    replyTo: process.env.REPLY_TO_EMAIL || process.env.ADMIN_EMAIL || siteConfig.contactEmail,
    template: adminCustomEmail({ subject, message, locale: lead.locale }),
  })

  if (result.success) {
    await logActivity(leadId, "email_sent", { subject })
  }

  revalidatePath(`/admin/leads/${leadId}`)

  return result.success
    ? { success: true, message: "Email sent." }
    : { success: false, message: `Could not send email (${result.error}).` }
}
