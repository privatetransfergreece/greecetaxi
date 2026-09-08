import "server-only"
import { Resend } from "resend"

export type SendEmailInput = {
  to: string
  subject: string
  html: string
  text: string
  replyTo?: string
  attachments?: { filename: string; content: Buffer }[]
}

export type SendEmailResult = { success: true } | { success: false; error: string }

let resendClient: Resend | null = null

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  if (!resendClient) resendClient = new Resend(apiKey)
  return resendClient
}

/**
 * Single choke point for all outbound email. Nothing else in the app should
 * import the Resend SDK directly — this keeps the API key, the "from"
 * address, and error handling in one place.
 *
 * Never throws: a missing API key or a Resend-side failure is returned as
 * `{ success: false, error }` so callers (see app/actions/email.ts) can log
 * it to email_log and let the admin retry, without ever failing the
 * database write that triggered the email.
 */
export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const from = process.env.FROM_EMAIL

  if (!from) {
    return { success: false, error: "FROM_EMAIL is not configured" }
  }

  const client = getResendClient()
  if (!client) {
    console.error("[mailer] RESEND_API_KEY is not configured — email not sent:", input.subject)
    return { success: false, error: "RESEND_API_KEY is not configured" }
  }

  try {
    const { error } = await client.emails.send({
      from,
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      replyTo: input.replyTo,
      attachments: input.attachments?.map((a) => ({
        filename: a.filename,
        content: a.content,
      })),
    })

    if (error) {
      console.error("[mailer] Resend error:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown email error"
    console.error("[mailer] Failed to send email:", message)
    return { success: false, error: message }
  }
}
