import { NextResponse } from "next/server"

import { createAdminClient, isSupabaseConfigured } from "@/lib/supabase/admin-client"
import type { LeadInsert } from "@/lib/supabase/types"
import { sendAndLog } from "@/lib/email/send"
import { adminNewLeadEmail, customerRequestReceivedEmail } from "@/lib/email/templates"
import { siteConfig } from "@/lib/site-config"

export const runtime = "nodejs"

type QuotePayload = {
  fullName?: unknown
  email?: unknown
  phone?: unknown
  country?: unknown
  transferType?: unknown
  pickupLocation?: unknown
  dropoffLocation?: unknown
  travelDate?: unknown
  pickupTime?: unknown
  returnTransfer?: unknown
  returnPickupLocation?: unknown
  returnDropoffLocation?: unknown
  returnDate?: unknown
  returnTime?: unknown
  adults?: unknown
  children?: unknown
  infants?: unknown
  luggage?: unknown
  flightNumber?: unknown
  ferryInfo?: unknown
  hotelName?: unknown
  specialRequests?: unknown
  consent?: unknown
  locale?: unknown
  website?: unknown // honeypot — real visitors never fill this in
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_SHORT_LENGTH = 200
const MAX_LONG_LENGTH = 2000

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

// Single-instance, in-memory limiter. Resets on server restart and doesn't
// share state across multiple instances — sufficient as a first line of
// defense, but a shared store (e.g. Redis) is recommended if this is
// deployed behind a multi-instance/serverless setup.
const requestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  )
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS
}

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

function truncated(value: unknown, max: number): string {
  return str(value).slice(0, max)
}

function validate(payload: QuotePayload): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!str(payload.fullName)) {
    errors.fullName = "required"
  } else if (str(payload.fullName).length > MAX_SHORT_LENGTH) {
    errors.fullName = "tooLong"
  }

  const email = str(payload.email)
  if (!email) {
    errors.email = "required"
  } else if (!EMAIL_PATTERN.test(email) || email.length > MAX_SHORT_LENGTH) {
    errors.email = "invalid"
  }

  if (str(payload.phone).length > MAX_SHORT_LENGTH) errors.phone = "tooLong"
  if (str(payload.country).length > MAX_SHORT_LENGTH) errors.country = "tooLong"

  if (!str(payload.transferType)) errors.transferType = "required"
  if (!str(payload.pickupLocation)) {
    errors.pickupLocation = "required"
  } else if (str(payload.pickupLocation).length > MAX_SHORT_LENGTH) {
    errors.pickupLocation = "tooLong"
  }
  if (!str(payload.dropoffLocation)) {
    errors.dropoffLocation = "required"
  } else if (str(payload.dropoffLocation).length > MAX_SHORT_LENGTH) {
    errors.dropoffLocation = "tooLong"
  }
  if (!str(payload.travelDate)) errors.travelDate = "required"
  if (!str(payload.pickupTime)) errors.pickupTime = "required"

  const returnTransfer = payload.returnTransfer === true || payload.returnTransfer === "true"
  if (returnTransfer) {
    if (!str(payload.returnDate)) errors.returnDate = "required"
    if (!str(payload.returnTime)) errors.returnTime = "required"
  }

  if (str(payload.flightNumber).length > MAX_SHORT_LENGTH) errors.flightNumber = "tooLong"
  if (str(payload.ferryInfo).length > MAX_SHORT_LENGTH) errors.ferryInfo = "tooLong"
  if (str(payload.hotelName).length > MAX_SHORT_LENGTH) errors.hotelName = "tooLong"
  if (str(payload.specialRequests).length > MAX_LONG_LENGTH) errors.specialRequests = "tooLong"

  if (payload.consent !== true && payload.consent !== "true") {
    errors.consent = "required"
  }

  return errors
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, errors: { form: "rateLimited" } },
      { status: 429 }
    )
  }

  let payload: QuotePayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "invalidPayload" } },
      { status: 400 }
    )
  }

  // Honeypot: a hidden field only bots fill in. Pretend success so bots
  // don't learn to look for a different signal, without processing the lead.
  if (str(payload.website)) {
    return NextResponse.json({ ok: true })
  }

  const errors = validate(payload)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  const lead = {
    submittedAt: new Date().toISOString(),
    locale: str(payload.locale) || "en",
    fullName: truncated(payload.fullName, MAX_SHORT_LENGTH),
    email: truncated(payload.email, MAX_SHORT_LENGTH),
    phone: truncated(payload.phone, MAX_SHORT_LENGTH),
    country: truncated(payload.country, MAX_SHORT_LENGTH),
    transferType: truncated(payload.transferType, MAX_SHORT_LENGTH),
    pickupLocation: truncated(payload.pickupLocation, MAX_SHORT_LENGTH),
    dropoffLocation: truncated(payload.dropoffLocation, MAX_SHORT_LENGTH),
    travelDate: truncated(payload.travelDate, MAX_SHORT_LENGTH),
    pickupTime: truncated(payload.pickupTime, MAX_SHORT_LENGTH),
    returnTransfer: payload.returnTransfer === true || payload.returnTransfer === "true",
    returnPickupLocation: truncated(payload.returnPickupLocation, MAX_SHORT_LENGTH),
    returnDropoffLocation: truncated(payload.returnDropoffLocation, MAX_SHORT_LENGTH),
    returnDate: truncated(payload.returnDate, MAX_SHORT_LENGTH),
    returnTime: truncated(payload.returnTime, MAX_SHORT_LENGTH),
    adults: truncated(payload.adults, 10),
    children: truncated(payload.children, 10),
    infants: truncated(payload.infants, 10),
    luggage: truncated(payload.luggage, 10),
    flightNumber: truncated(payload.flightNumber, MAX_SHORT_LENGTH),
    ferryInfo: truncated(payload.ferryInfo, MAX_SHORT_LENGTH),
    hotelName: truncated(payload.hotelName, MAX_SHORT_LENGTH),
    specialRequests: truncated(payload.specialRequests, MAX_LONG_LENGTH),
    ip,
  }

  // Structured server-side log so every request is captured even before a
  // notification channel is configured — check hosting platform logs.
  console.log("[quote-request]", JSON.stringify(lead))

  const webhookUrl = process.env.QUOTE_NOTIFICATION_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      })
    } catch (error) {
      console.error("[quote-request] failed to forward to notification webhook", error)
    }
  }

  // Database write happens before any email attempt, and an email failure
  // never rolls it back — see lib/email/send.ts, which logs every attempt
  // to email_log so a failed send can be retried from the admin.
  if (!isSupabaseConfigured()) {
    console.warn("[quote-request] Supabase is not configured — request logged above only, not saved to the CRM.")
    return NextResponse.json({ ok: true })
  }

  const toInt = (value: string, fallback: number) => {
    const parsed = Number.parseInt(value, 10)
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback
  }

  const leadInsert: LeadInsert = {
    locale: lead.locale === "el" ? "el" : "en",
    full_name: lead.fullName,
    email: lead.email,
    phone: lead.phone || null,
    country: lead.country || null,
    transfer_type: lead.transferType,
    pickup_location: lead.pickupLocation,
    dropoff_location: lead.dropoffLocation,
    travel_date: lead.travelDate,
    pickup_time: lead.pickupTime,
    return_transfer: lead.returnTransfer,
    return_pickup_location: lead.returnPickupLocation || null,
    return_dropoff_location: lead.returnDropoffLocation || null,
    return_date: lead.returnDate || null,
    return_time: lead.returnTime || null,
    adults: toInt(lead.adults, 1),
    children: toInt(lead.children, 0),
    infants: toInt(lead.infants, 0),
    luggage: toInt(lead.luggage, 1),
    flight_number: lead.flightNumber || null,
    ferry_info: lead.ferryInfo || null,
    hotel_name: lead.hotelName || null,
    special_requests: lead.specialRequests || null,
    ip: lead.ip || null,
    source: "get-quote-form",
  }

  try {
    const supabase = createAdminClient()
    const { data: savedLead, error: insertError } = await supabase
      .from("leads")
      .insert(leadInsert)
      .select()
      .single()

    if (insertError || !savedLead) {
      console.error("[quote-request] Failed to save lead to Supabase:", insertError)
      return NextResponse.json({ ok: false, errors: { form: "saveFailed" } }, { status: 500 })
    }

    await supabase.from("lead_activity").insert({
      lead_id: savedLead.id,
      action: "lead_created",
      detail: { source: "get-quote-form" },
    })

    const adminEmail = process.env.ADMIN_EMAIL
    if (adminEmail) {
      await sendAndLog({
        type: "admin_new_lead",
        leadId: savedLead.id,
        to: adminEmail,
        replyTo: savedLead.email,
        template: adminNewLeadEmail(savedLead),
      })
    } else {
      console.warn("[quote-request] ADMIN_EMAIL is not configured — skipping admin notification.")
    }

    await sendAndLog({
      type: "customer_request_received",
      leadId: savedLead.id,
      to: savedLead.email,
      replyTo: process.env.REPLY_TO_EMAIL || siteConfig.contactEmail,
      template: customerRequestReceivedEmail(savedLead),
    })
  } catch (error) {
    console.error("[quote-request] Unexpected error saving lead or sending emails:", error)
    return NextResponse.json({ ok: false, errors: { form: "saveFailed" } }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
