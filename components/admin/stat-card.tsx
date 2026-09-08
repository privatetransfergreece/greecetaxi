import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type StatCardProps = {
  label: string
  value: number
  icon: LucideIcon
  tint: "slate" | "amber" | "teal" | "coral" | "green" | "red"
}

const TINTS: Record<StatCardProps["tint"], { bg: string; text: string }> = {
  slate: { bg: "bg-charcoal/8", text: "text-charcoal" },
  amber: { bg: "bg-amber-500/12", text: "text-amber-700" },
  teal: { bg: "bg-teal-deep/10", text: "text-teal-deep" },
  coral: { bg: "bg-coral/12", text: "text-coral" },
  green: { bg: "bg-emerald-500/12", text: "text-emerald-700" },
  red: { bg: "bg-red-500/10", text: "text-red-700" },
}

function StatCard({ label, value, icon: Icon, tint }: StatCardProps) {
  const colors = TINTS[tint]

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-border transition-shadow hover:shadow-md hover:shadow-black/5">
      <span className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", colors.bg, colors.text)}>
        <Icon className="size-5" strokeWidth={2} />
      </span>
      <div className="flex flex-col">
        <span className="font-heading text-2xl font-semibold text-charcoal">{value}</span>
        <span className="text-sm text-slate">{label}</span>
      </div>
    </div>
  )
}

export { StatCard }
