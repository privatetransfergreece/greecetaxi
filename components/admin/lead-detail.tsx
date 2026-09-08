"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, XCircle, Send, BadgeCheck, Mail, MessageCircle, Ban } from "lucide-react"

import type { Lead, LeadActivity, EmailLogEntry, Driver, DispatchLogEntry } from "@/lib/supabase/types"
import { updateLead, sendQuote, confirmAndSend, cancelLead, resendEmail, composeEmail } from "@/app/actions/leads"
import { dispatchDriver } from "@/app/actions/drivers"
import { LeadStatusBadge } from "@/components/admin/status-badge"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/currency"

type Banner = { type: "success" | "error"; text: string } | null

const inputClass =
  "h-10 w-full rounded-lg border border-border bg-white px-3 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
const labelClass = "text-xs font-semibold tracking-wide text-slate uppercase"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className={labelClass}>{label}</span>
      {children}
    </div>
  )
}

function LeadDetail({
  lead,
  activity,
  emailLog,
  drivers,
  dispatchHistory,
}: {
  lead: Lead
  activity: LeadActivity[]
  emailLog: EmailLogEntry[]
  drivers: Driver[]
  dispatchHistory: (DispatchLogEntry & { driver_name: string | null })[]
}) {
  const router = useRouter()
  const formRef = React.useRef<HTMLFormElement>(null)
  const [pending, setPending] = React.useState<string | null>(null)
  const [banner, setBanner] = React.useState<Banner>(null)
  const [showCompose, setShowCompose] = React.useState(false)
  const [returnTransfer, setReturnTransfer] = React.useState(lead.return_transfer)

  function getFormData(): FormData {
    return new FormData(formRef.current ?? undefined)
  }

  async function run(key: string, action: () => Promise<{ success: boolean; message: string }>) {
    setPending(key)
    setBanner(null)
    try {
      const result = await action()
      setBanner({ type: result.success ? "success" : "error", text: result.message })
      router.refresh()
    } finally {
      setPending(null)
    }
  }

  async function handleDispatch(driverId: string) {
    setPending(`dispatch-${driverId}`)
    try {
      const result = await dispatchDriver(lead.id, driverId)
      setBanner({ type: result.success ? "success" : "error", text: result.message })
      if (result.whatsappUrl) window.open(result.whatsappUrl, "_blank", "noopener,noreferrer")
      router.refresh()
    } finally {
      setPending(null)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-6">
        {banner ? (
          <div
            className={`flex items-start gap-2.5 rounded-lg p-3 text-sm ${
              banner.type === "success" ? "bg-emerald-500/10 text-emerald-800" : "bg-destructive/10 text-destructive"
            }`}
          >
            {banner.type === "success" ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> : <XCircle className="mt-0.5 size-4 shrink-0" />}
            <span>{banner.text}</span>
          </div>
        ) : null}

        <div className="flex items-center gap-3">
          <LeadStatusBadge status={lead.status} travelDate={lead.travel_date} />
          <span className="text-xs text-slate">Submitted {new Date(lead.created_at).toLocaleString("en-GB")}</span>
        </div>

        <form ref={formRef} className="flex flex-col gap-6 rounded-2xl bg-white p-5 ring-1 ring-border sm:p-6">
          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-sm font-semibold text-charcoal">Customer</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name">
                <input name="full_name" defaultValue={lead.full_name} required className={inputClass} />
              </Field>
              <Field label="Email">
                <input name="email" type="email" defaultValue={lead.email} required className={inputClass} />
              </Field>
              <Field label="Phone">
                <input name="phone" defaultValue={lead.phone ?? ""} className={inputClass} />
              </Field>
              <Field label="Country">
                <input name="country" defaultValue={lead.country ?? ""} className={inputClass} />
              </Field>
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-border/70 pt-6">
            <h2 className="font-heading text-sm font-semibold text-charcoal">Journey</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Transfer Type">
                <input name="transfer_type" defaultValue={lead.transfer_type} required className={inputClass} />
              </Field>
              <div />
              <Field label="Pickup Location">
                <input name="pickup_location" defaultValue={lead.pickup_location} required className={inputClass} />
              </Field>
              <Field label="Drop-off Location">
                <input name="dropoff_location" defaultValue={lead.dropoff_location} required className={inputClass} />
              </Field>
              <Field label="Travel Date">
                <input name="travel_date" type="date" defaultValue={lead.travel_date} required className={inputClass} />
              </Field>
              <Field label="Pickup Time">
                <input name="pickup_time" type="time" defaultValue={lead.pickup_time.slice(0, 5)} required className={inputClass} />
              </Field>
            </div>

            <label className="flex w-fit items-center gap-2 text-sm text-charcoal">
              <input
                type="checkbox"
                name="return_transfer"
                value="true"
                checked={returnTransfer}
                onChange={(e) => setReturnTransfer(e.target.checked)}
                className="size-4 rounded border-border"
              />
              Return transfer
            </label>

            {returnTransfer ? (
              <div className="grid gap-4 rounded-xl border border-border bg-ivory p-4 sm:grid-cols-2">
                <Field label="Return Pickup">
                  <input name="return_pickup_location" defaultValue={lead.return_pickup_location ?? ""} className={inputClass} />
                </Field>
                <Field label="Return Drop-off">
                  <input name="return_dropoff_location" defaultValue={lead.return_dropoff_location ?? ""} className={inputClass} />
                </Field>
                <Field label="Return Date">
                  <input name="return_date" type="date" defaultValue={lead.return_date ?? ""} className={inputClass} />
                </Field>
                <Field label="Return Time">
                  <input name="return_time" type="time" defaultValue={lead.return_time?.slice(0, 5) ?? ""} className={inputClass} />
                </Field>
              </div>
            ) : null}
          </section>

          <section className="flex flex-col gap-4 border-t border-border/70 pt-6">
            <h2 className="font-heading text-sm font-semibold text-charcoal">Passengers &amp; Luggage</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Field label="Adults">
                <input name="adults" type="number" min={0} defaultValue={lead.adults} className={inputClass} />
              </Field>
              <Field label="Children">
                <input name="children" type="number" min={0} defaultValue={lead.children} className={inputClass} />
              </Field>
              <Field label="Infants">
                <input name="infants" type="number" min={0} defaultValue={lead.infants} className={inputClass} />
              </Field>
              <Field label="Luggage">
                <input name="luggage" type="number" min={0} defaultValue={lead.luggage} className={inputClass} />
              </Field>
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-border/70 pt-6">
            <h2 className="font-heading text-sm font-semibold text-charcoal">Additional Details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Flight Number">
                <input name="flight_number" defaultValue={lead.flight_number ?? ""} className={inputClass} />
              </Field>
              <Field label="Ferry Info">
                <input name="ferry_info" defaultValue={lead.ferry_info ?? ""} className={inputClass} />
              </Field>
              <Field label="Hotel">
                <input name="hotel_name" defaultValue={lead.hotel_name ?? ""} className={inputClass} />
              </Field>
            </div>
            <Field label="Special Requests (customer-submitted)">
              <textarea
                name="special_requests"
                defaultValue={lead.special_requests ?? ""}
                rows={3}
                className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
              />
            </Field>
          </section>

          <section className="flex flex-col gap-4 border-t border-border/70 pt-6">
            <h2 className="font-heading text-sm font-semibold text-charcoal">Pricing &amp; Admin Notes</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Quoted Amount (EUR)">
                <input
                  name="quoted_amount"
                  type="number"
                  step="0.01"
                  min={0}
                  defaultValue={lead.quoted_amount ?? ""}
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label="Admin Notes (shown to customer on quote/confirmation emails)">
              <textarea
                name="admin_notes"
                defaultValue={lead.admin_notes ?? ""}
                rows={3}
                className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
              />
            </Field>
          </section>
        </form>

        <div className="flex flex-wrap gap-3">
          <Button
            disabled={pending !== null}
            onClick={() => run("save", () => updateLead(lead.id, getFormData()))}
            variant="outline"
            className="h-10 px-5"
          >
            {pending === "save" ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            disabled={pending !== null}
            onClick={() =>
              run("quote", async () => {
                const saveResult = await updateLead(lead.id, getFormData())
                if (!saveResult.success) return saveResult
                return sendQuote(lead.id)
              })
            }
            variant="outline"
            className="h-10 gap-1.5 px-5"
          >
            <Send className="size-4" />
            {pending === "quote" ? "Sending..." : "Send Quote"}
          </Button>
          <Button
            disabled={pending !== null}
            onClick={() => run("confirm", () => confirmAndSend(lead.id, getFormData()))}
            className="h-10 gap-1.5 bg-coral px-5 text-white hover:bg-coral/90"
          >
            <BadgeCheck className="size-4" />
            {pending === "confirm" ? "Confirming..." : "Confirm & Send"}
          </Button>
          <Button
            disabled={pending !== null}
            onClick={() => setShowCompose((v) => !v)}
            variant="outline"
            className="h-10 gap-1.5 px-5"
          >
            <Mail className="size-4" />
            Compose Email
          </Button>
          {lead.status !== "cancelled" ? (
            <Button
              disabled={pending !== null}
              onClick={() => {
                if (confirm("Cancel this request?")) run("cancel", () => cancelLead(lead.id))
              }}
              variant="ghost"
              className="h-10 gap-1.5 px-5 text-destructive hover:bg-destructive/10"
            >
              <Ban className="size-4" />
              Cancel Request
            </Button>
          ) : null}
        </div>

        {showCompose ? (
          <ComposeEmailPanel
            leadId={lead.id}
            pending={pending === "compose"}
            onSend={(subject, message) =>
              run("compose", async () => {
                const fd = new FormData()
                fd.set("subject", subject)
                fd.set("message", message)
                const result = await composeEmail(lead.id, fd)
                if (result.success) setShowCompose(false)
                return result
              })
            }
          />
        ) : null}
      </div>

      <aside className="flex flex-col gap-6">
        <div className="rounded-2xl bg-white p-5 ring-1 ring-border">
          <h3 className="mb-3 font-heading text-sm font-semibold text-charcoal">Emails Sent</h3>
          <div className="flex flex-col gap-2.5">
            {emailLog.length === 0 ? <p className="text-xs text-slate">No emails sent yet.</p> : null}
            {emailLog.map((entry) => (
              <div key={entry.id} className="flex items-start justify-between gap-2 text-xs">
                <div className="flex flex-col">
                  <span className="font-medium text-charcoal">{entry.subject}</span>
                  <span className="text-slate">{new Date(entry.created_at).toLocaleString("en-GB")}</span>
                </div>
                <span className={entry.success ? "text-emerald-600" : "text-destructive"}>
                  {entry.success ? "Sent" : "Failed"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2 border-t border-border/70 pt-3">
            <button
              disabled={pending !== null}
              onClick={() => run("resend-received", () => resendEmail(lead.id, "customer_request_received"))}
              className="text-xs font-semibold text-teal-deep hover:text-coral disabled:opacity-50"
            >
              Resend received
            </button>
            {lead.quoted_amount != null ? (
              <button
                disabled={pending !== null}
                onClick={() => run("resend-quote", () => resendEmail(lead.id, "customer_quote_sent"))}
                className="text-xs font-semibold text-teal-deep hover:text-coral disabled:opacity-50"
              >
                Resend quote
              </button>
            ) : null}
            {lead.status === "confirmed" ? (
              <button
                disabled={pending !== null}
                onClick={() => run("resend-confirmed", () => resendEmail(lead.id, "customer_booking_confirmed"))}
                className="text-xs font-semibold text-teal-deep hover:text-coral disabled:opacity-50"
              >
                Resend confirmation
              </button>
            ) : null}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 ring-1 ring-border">
          <h3 className="mb-3 flex items-center gap-1.5 font-heading text-sm font-semibold text-charcoal">
            <MessageCircle className="size-4" /> Dispatch Driver
          </h3>
          {drivers.length === 0 ? (
            <p className="text-xs text-slate">No active drivers yet. Add one under Drivers.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {drivers.map((driver) => (
                <button
                  key={driver.id}
                  disabled={pending !== null}
                  onClick={() => handleDispatch(driver.id)}
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-left text-sm hover:border-teal-deep disabled:opacity-50"
                >
                  <span className="text-charcoal">{driver.name}</span>
                  <span className="text-xs text-slate">
                    {pending === `dispatch-${driver.id}` ? "Opening..." : "WhatsApp"}
                  </span>
                </button>
              ))}
            </div>
          )}
          {dispatchHistory.length > 0 ? (
            <div className="mt-3 flex flex-col gap-1.5 border-t border-border/70 pt-3">
              {dispatchHistory.map((entry) => (
                <p key={entry.id} className="text-xs text-slate">
                  {entry.driver_name ?? "Unknown driver"} contacted {new Date(entry.contacted_at).toLocaleString("en-GB")}
                </p>
              ))}
            </div>
          ) : null}
        </div>

        <div className="rounded-2xl bg-white p-5 ring-1 ring-border">
          <h3 className="mb-3 font-heading text-sm font-semibold text-charcoal">Activity</h3>
          <div className="flex flex-col gap-3">
            {activity.length === 0 ? <p className="text-xs text-slate">No activity yet.</p> : null}
            {activity.map((entry) => (
              <div key={entry.id} className="text-xs">
                <p className="font-medium text-charcoal capitalize">{entry.action.replace(/_/g, " ")}</p>
                <p className="text-slate">{new Date(entry.created_at).toLocaleString("en-GB")}</p>
              </div>
            ))}
          </div>
        </div>

        {lead.quoted_amount != null ? (
          <div className="rounded-2xl bg-teal-deep p-5 text-ivory">
            <p className="text-xs tracking-wide text-ivory/60 uppercase">Quoted Total</p>
            <p className="font-heading text-2xl font-semibold">{formatCurrency(lead.quoted_amount)}</p>
          </div>
        ) : null}
      </aside>
    </div>
  )
}

function ComposeEmailPanel({
  onSend,
  pending,
}: {
  leadId: string
  pending: boolean
  onSend: (subject: string, message: string) => void
}) {
  const [subject, setSubject] = React.useState("")
  const [message, setMessage] = React.useState("")

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 ring-1 ring-border">
      <h3 className="font-heading text-sm font-semibold text-charcoal">Compose Email</h3>
      <Field label="Subject">
        <input value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Message">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
        />
      </Field>
      <Button
        disabled={pending || !subject.trim() || !message.trim()}
        onClick={() => onSend(subject, message)}
        className="h-10 w-fit gap-1.5 bg-coral px-5 text-white hover:bg-coral/90"
      >
        <Send className="size-4" />
        {pending ? "Sending..." : "Send Email"}
      </Button>
    </div>
  )
}

export { LeadDetail }
