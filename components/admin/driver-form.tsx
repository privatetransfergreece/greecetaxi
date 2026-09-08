"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import type { Driver } from "@/lib/supabase/types"
import { createDriver, updateDriver } from "@/app/actions/drivers"
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

function DriverForm({ driver, onDone }: { driver?: Driver; onDone?: () => void }) {
  const router = useRouter()
  const [pending, setPending] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setError(null)
    const result = driver ? await updateDriver(driver.id, formData) : await createDriver(formData)
    setPending(false)
    if (!result.success) {
      setError(result.message)
      return
    }
    router.refresh()
    onDone?.()
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 rounded-2xl bg-white p-5 ring-1 ring-border">
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input name="name" defaultValue={driver?.name} required className={inputClass} />
        </Field>
        <Field label="WhatsApp Number (with country code)">
          <input name="whatsapp_number" defaultValue={driver?.whatsapp_number} placeholder="30690..." required className={inputClass} />
        </Field>
        <Field label="Vehicle Type">
          <input name="vehicle_type" defaultValue={driver?.vehicle_type ?? ""} placeholder="Sedan, Minivan, Minibus..." className={inputClass} />
        </Field>
        <Field label="Vehicle Model">
          <input name="vehicle_model" defaultValue={driver?.vehicle_model ?? ""} className={inputClass} />
        </Field>
        <Field label="Passenger Capacity">
          <input name="passenger_capacity" type="number" min={0} defaultValue={driver?.passenger_capacity ?? ""} className={inputClass} />
        </Field>
        <Field label="Luggage Capacity">
          <input name="luggage_capacity" type="number" min={0} defaultValue={driver?.luggage_capacity ?? ""} className={inputClass} />
        </Field>
        <Field label="Coverage Area">
          <input name="coverage_area" defaultValue={driver?.coverage_area ?? ""} placeholder="e.g. Athens & Attica" className={inputClass} />
        </Field>
        <Field label="Status">
          <select name="status" defaultValue={driver?.status ?? "active"} className={inputClass}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </Field>
      </div>
      <Field label="Notes">
        <textarea
          name="notes"
          defaultValue={driver?.notes ?? ""}
          rows={2}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
        />
      </Field>
      <Button disabled={pending} type="submit" className="h-10 w-fit bg-coral px-5 text-white hover:bg-coral/90">
        {pending ? "Saving..." : driver ? "Save Driver" : "Add Driver"}
      </Button>
    </form>
  )
}

export { DriverForm }
