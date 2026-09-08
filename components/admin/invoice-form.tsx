"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Plus, Trash2 } from "lucide-react"

import { createInvoice } from "@/app/actions/invoices"
import { Button } from "@/components/ui/button"

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

function InvoiceForm({
  defaultLeadId,
  defaultName,
  defaultEmail,
}: {
  defaultLeadId?: string
  defaultName?: string
  defaultEmail?: string
}) {
  const router = useRouter()
  const [lineItems, setLineItems] = React.useState([{ description: "", amount: "" }])
  const [pending, setPending] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setError(null)
    const result = await createInvoice(formData)
    setPending(false)
    if (!result.success) {
      setError(result.message)
      return
    }
    router.push(`/admin/invoices/${result.invoiceId}`)
  }

  const total = lineItems.reduce((sum, item) => sum + (Number.parseFloat(item.amount) || 0), 0)

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 rounded-2xl bg-white p-5 ring-1 ring-border sm:p-6">
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {defaultLeadId ? <input type="hidden" name="lead_id" value={defaultLeadId} /> : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Customer Name">
          <input name="customer_name" defaultValue={defaultName} required className={inputClass} />
        </Field>
        <Field label="Customer Email">
          <input name="customer_email" type="email" defaultValue={defaultEmail} required className={inputClass} />
        </Field>
        <Field label="Payment Method">
          <input name="payment_method" placeholder="Cash, card, bank transfer..." className={inputClass} />
        </Field>
      </div>

      <div className="flex flex-col gap-3">
        <span className={labelClass}>Line Items (EUR)</span>
        {lineItems.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              name="line_item_description"
              value={item.description}
              onChange={(e) => {
                const next = [...lineItems]
                next[index] = { ...next[index], description: e.target.value }
                setLineItems(next)
              }}
              placeholder="Description"
              required
              className={inputClass}
            />
            <input
              name="line_item_amount"
              type="number"
              step="0.01"
              min={0}
              value={item.amount}
              onChange={(e) => {
                const next = [...lineItems]
                next[index] = { ...next[index], amount: e.target.value }
                setLineItems(next)
              }}
              placeholder="0.00"
              required
              className={`${inputClass} w-32 shrink-0`}
            />
            {lineItems.length > 1 ? (
              <button
                type="button"
                onClick={() => setLineItems(lineItems.filter((_, i) => i !== index))}
                className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-slate hover:text-destructive"
              >
                <Trash2 className="size-4" />
              </button>
            ) : null}
          </div>
        ))}
        <button
          type="button"
          onClick={() => setLineItems([...lineItems, { description: "", amount: "" }])}
          className="flex w-fit items-center gap-1.5 text-xs font-semibold text-teal-deep hover:text-coral"
        >
          <Plus className="size-3.5" /> Add line item
        </button>
      </div>

      <Field label="Notes">
        <textarea
          name="notes"
          rows={2}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
        />
      </Field>

      <div className="flex items-center justify-between border-t border-border/70 pt-4">
        <span className="font-heading text-base font-semibold text-charcoal">Total: €{total.toFixed(2)}</span>
        <Button disabled={pending} type="submit" className="h-10 bg-coral px-5 text-white hover:bg-coral/90">
          {pending ? "Creating..." : "Create Invoice"}
        </Button>
      </div>
    </form>
  )
}

export { InvoiceForm }
