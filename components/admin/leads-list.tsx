import Link from "next/link"
import { ArrowRight, Luggage, Users } from "lucide-react"

import type { Lead } from "@/lib/supabase/types"
import { LeadStatusBadge } from "@/components/admin/status-badge"
import { formatTravelDate, formatTravelTime, formatTransferType } from "@/lib/email/format"
import { formatCurrency } from "@/lib/currency"
import { referenceFromId } from "@/lib/reference"

function LeadsList({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-12 text-center ring-1 ring-border">
        <p className="font-heading text-base font-semibold text-charcoal">No requests found</p>
        <p className="text-sm text-slate">Nothing matches the current filters.</p>
      </div>
    )
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-x-auto rounded-2xl bg-white ring-1 ring-border lg:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs font-semibold tracking-wide text-slate uppercase">
              <th className="px-5 py-3">Reference</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Route</th>
              <th className="px-5 py-3">Travel Date</th>
              <th className="px-5 py-3">Passengers</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Quoted</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-border/60 last:border-0 hover:bg-ivory/60">
                <td className="px-5 py-3.5 font-mono text-xs text-slate">{referenceFromId(lead.id)}</td>
                <td className="px-5 py-3.5">
                  <div className="flex flex-col">
                    <span className="font-medium text-charcoal">{lead.full_name}</span>
                    <span className="text-xs text-slate">{lead.email}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex flex-col">
                    <span className="text-charcoal">{lead.pickup_location} → {lead.dropoff_location}</span>
                    <span className="text-xs text-slate">{formatTransferType(lead.transfer_type, "en")}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap text-charcoal">
                  {formatTravelDate(lead.travel_date, "en")}
                  <span className="ml-1.5 text-xs text-slate">{formatTravelTime(lead.pickup_time)}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap text-slate">
                  {lead.adults + lead.children + lead.infants} pax
                </td>
                <td className="px-5 py-3.5">
                  <LeadStatusBadge status={lead.status} travelDate={lead.travel_date} />
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap text-charcoal">
                  {lead.quoted_amount != null ? formatCurrency(lead.quoted_amount) : "—"}
                </td>
                <td className="px-5 py-3.5 text-right">
                  <Link
                    href={`/admin/leads/${lead.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-deep hover:text-coral"
                  >
                    View
                    <ArrowRight className="size-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-3 lg:hidden">
        {leads.map((lead) => (
          <Link
            key={lead.id}
            href={`/admin/leads/${lead.id}`}
            className="flex flex-col gap-3 rounded-2xl bg-white p-4 ring-1 ring-border"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col">
                <span className="font-heading text-sm font-semibold text-charcoal">{lead.full_name}</span>
                <span className="text-xs text-slate">{lead.email}</span>
              </div>
              <LeadStatusBadge status={lead.status} travelDate={lead.travel_date} />
            </div>
            <div className="flex flex-col gap-1 text-sm text-charcoal">
              <span>{lead.pickup_location} → {lead.dropoff_location}</span>
              <span className="text-xs text-slate">
                {formatTravelDate(lead.travel_date, "en")} · {formatTravelTime(lead.pickup_time)}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-border/70 pt-3 text-xs text-slate">
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Users className="size-3.5" /> {lead.adults + lead.children + lead.infants}
                </span>
                <span className="flex items-center gap-1">
                  <Luggage className="size-3.5" /> {lead.luggage}
                </span>
              </span>
              <span className="font-mono">{referenceFromId(lead.id)}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export { LeadsList }
