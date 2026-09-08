import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/page-header";
import { LeadsList } from "@/components/admin/leads-list";
import { listLeads } from "@/lib/data/leads";

export const metadata: Metadata = { title: "Confirmed Leads" };

export default async function AdminConfirmedLeadsPage() {
  const leads = await listLeads({ status: "confirmed" });

  return (
    <div>
      <AdminPageHeader title="Confirmed Leads" description="All confirmed bookings, including completed ones." />
      <LeadsList leads={leads} />
    </div>
  );
}
