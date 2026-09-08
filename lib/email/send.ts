import "server-only"

import { sendEmail } from "@/lib/mailer"
import { createAdminClient } from "@/lib/supabase/admin-client"
import type { EmailTemplateResult } from "@/lib/email/templates"

export type EmailType =
  | "admin_new_lead"
  | "customer_request_received"
  | "customer_quote_sent"
  | "customer_booking_confirmed"
  | "admin_booking_confirmed"
  | "admin_custom"
  | "invoice"

/**
 * Sends an email built from one of lib/email/templates.ts and records the
 * attempt in email_log regardless of outcome. A failed send never throws —
 * the caller (see app/actions/*.ts) always gets a result it can surface to
 * the admin, and the triggering database write is never rolled back because
 * of an email failure.
 */
export async function sendAndLog(input: {
  type: EmailType
  leadId: string | null
  to: string
  replyTo?: string
  template: EmailTemplateResult
}): Promise<{ success: boolean; error?: string }> {
  const result = await sendEmail({
    to: input.to,
    subject: input.template.subject,
    html: input.template.html,
    text: input.template.text,
    replyTo: input.replyTo,
  })

  try {
    const supabase = createAdminClient()
    await supabase.from("email_log").insert({
      lead_id: input.leadId,
      type: input.type,
      recipient: input.to,
      subject: input.template.subject,
      success: result.success,
      error: result.success ? null : result.error,
    })
  } catch (error) {
    console.error("[email] Failed to write email_log entry:", error)
  }

  return result.success ? { success: true } : { success: false, error: result.error }
}
