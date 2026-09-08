import type { LeadStatus, PaymentStatus, DriverStatus } from "@/lib/supabase/types"
import { cn } from "@/lib/utils"

const LEAD_STATUS_STYLES: Record<LeadStatus, string> = {
  pending: "bg-amber-500/12 text-amber-700",
  quoted: "bg-sky-500/12 text-sky-700",
  confirmed: "bg-emerald-500/12 text-emerald-700",
  completed: "bg-charcoal/8 text-charcoal",
  cancelled: "bg-red-500/10 text-red-700",
}

const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  pending: "Pending",
  quoted: "Quoted",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
}

function LeadStatusBadge({ status, travelDate }: { status: LeadStatus; travelDate?: string }) {
  const isCompleted = status === "confirmed" && travelDate && travelDate < new Date().toISOString().slice(0, 10)
  const effective: LeadStatus = isCompleted ? "completed" : status

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap",
        LEAD_STATUS_STYLES[effective]
      )}
    >
      {LEAD_STATUS_LABELS[effective]}
    </span>
  )
}

const PAYMENT_STATUS_STYLES: Record<PaymentStatus, string> = {
  unpaid: "bg-amber-500/12 text-amber-700",
  paid: "bg-emerald-500/12 text-emerald-700",
  refunded: "bg-charcoal/8 text-charcoal",
}

function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
  return (
    <span className={cn("inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold capitalize", PAYMENT_STATUS_STYLES[status])}>
      {status}
    </span>
  )
}

const DRIVER_STATUS_STYLES: Record<DriverStatus, string> = {
  active: "bg-emerald-500/12 text-emerald-700",
  inactive: "bg-charcoal/8 text-charcoal",
}

function DriverStatusBadge({ status }: { status: DriverStatus }) {
  return (
    <span className={cn("inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold capitalize", DRIVER_STATUS_STYLES[status])}>
      {status}
    </span>
  )
}

export { LeadStatusBadge, PaymentStatusBadge, DriverStatusBadge }
