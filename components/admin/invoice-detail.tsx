"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, XCircle, Mail, ExternalLink } from "lucide-react"

import type { Invoice } from "@/lib/supabase/types"
import { setInvoicePaymentStatus, sendInvoiceEmail } from "@/app/actions/invoices"
import { PaymentStatusBadge } from "@/components/admin/status-badge"
import { formatCurrency } from "@/lib/currency"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"

function InvoiceDetail({ invoice }: { invoice: Invoice }) {
  const router = useRouter()
  const [pending, setPending] = React.useState<string | null>(null)
  const [banner, setBanner] = React.useState<{ type: "success" | "error"; text: string } | null>(null)

  const publicUrl = `${siteConfig.url}/invoice/${invoice.access_token}`

  async function handleStatus(status: "unpaid" | "paid" | "refunded") {
    setPending(status)
    const result = await setInvoicePaymentStatus(invoice.id, status)
    setBanner({ type: result.success ? "success" : "error", text: result.message })
    router.refresh()
    setPending(null)
  }

  async function handleSend() {
    setPending("send")
    const result = await sendInvoiceEmail(invoice.id)
    setBanner({ type: result.success ? "success" : "error", text: result.message })
    setPending(null)
  }

  return (
    <div className="flex flex-col gap-6">
      {banner ? (
        <div className={`flex items-center gap-2 rounded-lg p-3 text-sm ${banner.type === "success" ? "bg-emerald-500/10 text-emerald-800" : "bg-destructive/10 text-destructive"}`}>
          {banner.type === "success" ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
          {banner.text}
        </div>
      ) : null}

      <div className="rounded-2xl bg-white p-6 ring-1 ring-border">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-slate">{invoice.invoice_number}</p>
            <p className="font-heading text-lg font-semibold text-charcoal">{invoice.customer_name}</p>
            <p className="text-sm text-slate">{invoice.customer_email}</p>
          </div>
          <PaymentStatusBadge status={invoice.payment_status} />
        </div>

        <table className="mt-6 w-full text-sm">
          <tbody>
            {invoice.line_items.map((item, i) => (
              <tr key={i} className="border-b border-border/60">
                <td className="py-2 text-charcoal">{item.description}</td>
                <td className="py-2 text-right text-charcoal">{formatCurrency(item.amount)}</td>
              </tr>
            ))}
            <tr>
              <td className="pt-3 font-heading text-base font-semibold text-charcoal">Total</td>
              <td className="pt-3 text-right font-heading text-base font-semibold text-charcoal">{formatCurrency(invoice.amount)}</td>
            </tr>
          </tbody>
        </table>

        {invoice.notes ? <p className="mt-4 text-sm text-slate">{invoice.notes}</p> : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button disabled={pending !== null} onClick={handleSend} className="h-10 gap-1.5 bg-coral px-5 text-white hover:bg-coral/90">
          <Mail className="size-4" />
          {pending === "send" ? "Sending..." : "Email Invoice"}
        </Button>
        <Button
          nativeButton={false}
          render={<a href={publicUrl} target="_blank" rel="noopener noreferrer" />}
          variant="outline"
          className="h-10 gap-1.5 px-5"
        >
          <ExternalLink className="size-4" />
          View Public Link
        </Button>
        {(["unpaid", "paid", "refunded"] as const).map((status) => (
          <Button
            key={status}
            disabled={pending !== null || invoice.payment_status === status}
            onClick={() => handleStatus(status)}
            variant="outline"
            className="h-10 px-5 capitalize"
          >
            Mark {status}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { InvoiceDetail }
