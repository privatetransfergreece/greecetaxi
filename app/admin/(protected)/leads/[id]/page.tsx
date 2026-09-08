import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/page-header";
import { LeadDetail } from "@/components/admin/lead-detail";
import { getLeadById, getLeadActivity, getLeadEmailLog } from "@/lib/data/leads";
import { listActiveDrivers, getDispatchHistoryForLead } from "@/lib/data/drivers";
import { referenceFromId } from "@/lib/reference";

export const metadata: Metadata = { title: "Lead Detail" };

export default async function AdminLeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) notFound();

  const [activity, emailLog, drivers, dispatchHistory] = await Promise.all([
    getLeadActivity(id),
    getLeadEmailLog(id),
    listActiveDrivers(),
    getDispatchHistoryForLead(id),
  ]);

  return (
    <div>
      <AdminPageHeader title={lead.full_name} description={`Reference ${referenceFromId(lead.id)}`} />
      <LeadDetail lead={lead} activity={activity} emailLog={emailLog} drivers={drivers} dispatchHistory={dispatchHistory} />
    </div>
  );
}
