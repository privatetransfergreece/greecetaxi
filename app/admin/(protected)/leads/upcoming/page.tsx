import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/page-header";
import { LeadsList } from "@/components/admin/leads-list";
import { listUpcomingTransfers } from "@/lib/data/leads";

export const metadata: Metadata = { title: "Upcoming Leads" };

export default async function AdminUpcomingLeadsPage() {
  const leads = await listUpcomingTransfers();

  return (
    <div>
      <AdminPageHeader title="Upcoming Leads" description="Confirmed transfers scheduled for today or later, soonest first." />
      <LeadsList leads={leads} />
    </div>
  );
}
