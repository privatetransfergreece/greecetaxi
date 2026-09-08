"use server"

import { revalidatePath } from "next/cache"

import { verifyAdminSession } from "@/lib/auth/dal"
import { createAdminClient } from "@/lib/supabase/admin-client"
import type { InvoiceLineItem, PaymentStatus } from "@/lib/supabase/types"
import { generateAccessToken, generateInvoiceNumber } from "@/lib/reference"
import { sendAndLog } from "@/lib/email/send"
import { invoiceEmail } from "@/lib/email/templates"
import { siteConfig } from "@/lib/site-config"
import type { ActionResult } from "@/app/actions/leads"

function parseLineItems(formData: FormData): InvoiceLineItem[] {
  const descriptions = formData.getAll("line_item_description")
  const amounts = formData.getAll("line_item_amount")

  const items: InvoiceLineItem[] = []
  for (let i = 0; i < descriptions.length; i++) {
    const description = String(descriptions[i] ?? "").trim()
    const amount = Number.parseFloat(String(amounts[i] ?? ""))
    if (description && Number.isFinite(amount)) {
      items.push({ description, amount })
    }
  }
  return items
}

export async function createInvoice(formData: FormData): Promise<ActionResult & { invoiceId?: string }> {
  await verifyAdminSession()

  const customerName = String(formData.get("customer_name") ?? "").trim()
  const customerEmail = String(formData.get("customer_email") ?? "").trim()
  const leadId = String(formData.get("lead_id") ?? "").trim() || null
  const paymentMethod = String(formData.get("payment_method") ?? "").trim() || null
  const notes = String(formData.get("notes") ?? "").trim() || null
  const lineItems = parseLineItems(formData)

  if (!customerName || !customerEmail) {
    return { success: false, message: "Customer name and email are required." }
  }
  if (lineItems.length === 0) {
    return { success: false, message: "Add at least one line item." }
  }

  const amount = lineItems.reduce((sum, item) => sum + item.amount, 0)

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("invoices")
    .insert({
      invoice_number: generateInvoiceNumber(),
      lead_id: leadId,
      customer_name: customerName,
      customer_email: customerEmail,
      line_items: lineItems,
      amount,
      currency: "EUR",
      payment_method: paymentMethod,
      notes,
      access_token: generateAccessToken(),
    })
    .select()
    .single()

  if (error || !data) {
    console.error("[invoices] createInvoice failed:", error)
    return { success: false, message: "Could not create invoice." }
  }

  if (leadId) {
    await supabase.from("lead_activity").insert({
      lead_id: leadId,
      action: "invoice_created",
      detail: { invoice_number: data.invoice_number, amount },
    })
  }

  revalidatePath("/admin/invoices")
  return { success: true, message: "Invoice created.", invoiceId: data.id }
}

export async function setInvoicePaymentStatus(invoiceId: string, status: PaymentStatus): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { error } = await supabase.from("invoices").update({ payment_status: status }).eq("id", invoiceId)
  if (error) {
    console.error("[invoices] setInvoicePaymentStatus failed:", error)
    return { success: false, message: "Could not update payment status." }
  }

  revalidatePath("/admin/invoices")
  revalidatePath(`/admin/invoices/${invoiceId}`)
  return { success: true, message: "Payment status updated." }
}

export async function sendInvoiceEmail(invoiceId: string): Promise<ActionResult> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data: invoice } = await supabase.from("invoices").select("*").eq("id", invoiceId).maybeSingle()
  if (!invoice) return { success: false, message: "Invoice not found." }

  let locale: "en" | "el" = "en"
  if (invoice.lead_id) {
    const { data: lead } = await supabase.from("leads").select("locale").eq("id", invoice.lead_id).maybeSingle()
    if (lead?.locale) locale = lead.locale
  }

  const result = await sendAndLog({
    type: "invoice",
    leadId: invoice.lead_id,
    to: invoice.customer_email,
    replyTo: process.env.REPLY_TO_EMAIL || process.env.ADMIN_EMAIL || siteConfig.contactEmail,
    template: invoiceEmail({ invoice, locale }),
  })

  return result.success
    ? { success: true, message: "Invoice emailed to customer." }
    : { success: false, message: `Could not send invoice email (${result.error}).` }
}
