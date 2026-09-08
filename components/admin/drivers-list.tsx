"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Plus, Trash2 } from "lucide-react"

import type { Driver } from "@/lib/supabase/types"
import { setDriverStatus, deleteDriver } from "@/app/actions/drivers"
import { DriverStatusBadge } from "@/components/admin/status-badge"
import { DriverForm } from "@/components/admin/driver-form"
import { Button } from "@/components/ui/button"

function DriversList({ drivers }: { drivers: Driver[] }) {
  const router = useRouter()
  const [showAdd, setShowAdd] = React.useState(false)
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [pending, setPending] = React.useState<string | null>(null)

  async function toggleStatus(driver: Driver) {
    setPending(driver.id)
    await setDriverStatus(driver.id, driver.status === "active" ? "inactive" : "active")
    router.refresh()
    setPending(null)
  }

  async function remove(driver: Driver) {
    if (!confirm(`Remove ${driver.name}?`)) return
    setPending(driver.id)
    await deleteDriver(driver.id)
    router.refresh()
    setPending(null)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button onClick={() => setShowAdd((v) => !v)} className="h-10 gap-1.5 bg-coral px-5 text-white hover:bg-coral/90">
          <Plus className="size-4" />
          Add Driver
        </Button>
      </div>

      {showAdd ? <DriverForm onDone={() => setShowAdd(false)} /> : null}

      <div className="flex flex-col gap-3">
        {drivers.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center text-sm text-slate ring-1 ring-border">
            No drivers added yet.
          </div>
        ) : null}

        {drivers.map((driver) =>
          editingId === driver.id ? (
            <DriverForm key={driver.id} driver={driver} onDone={() => setEditingId(null)} />
          ) : (
            <div key={driver.id} className="flex flex-col gap-3 rounded-2xl bg-white p-4 ring-1 ring-border sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-sm font-semibold text-charcoal">{driver.name}</span>
                  <DriverStatusBadge status={driver.status} />
                </div>
                <span className="text-xs text-slate">
                  {driver.whatsapp_number}
                  {driver.vehicle_type ? ` · ${driver.vehicle_type}` : ""}
                  {driver.coverage_area ? ` · ${driver.coverage_area}` : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={pending === driver.id}
                  onClick={() => setEditingId(driver.id)}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-charcoal hover:border-teal-deep disabled:opacity-50"
                >
                  Edit
                </button>
                <button
                  disabled={pending === driver.id}
                  onClick={() => toggleStatus(driver)}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-charcoal hover:border-teal-deep disabled:opacity-50"
                >
                  {driver.status === "active" ? "Set Inactive" : "Set Active"}
                </button>
                <button
                  disabled={pending === driver.id}
                  onClick={() => remove(driver)}
                  className="flex items-center gap-1 rounded-lg border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/5 disabled:opacity-50"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export { DriversList }
