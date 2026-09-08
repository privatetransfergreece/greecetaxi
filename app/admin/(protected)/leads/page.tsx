import type { Metadata } from "next";
import { Suspense } from "react";

import { AdminPageHeader } from "@/components/admin/page-header";
import { LeadsFilters } from "@/components/admin/leads-filters";
import { LeadsList } from "@/components/admin/leads-list";
import { listLeads } from "@/lib/data/leads";
import type { LeadStatus } from "@/lib/supabase/types";

export const metadata: Metadata = { title: "Leads" };

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const params = await searchParams;
  const leads = await listLeads({
    status: (params.status as LeadStatus | "all") ?? "all",
    search: params.q,
  });

  return (
    <div>
      <AdminPageHeader title="Leads" description="Every transfer request submitted through the Get a Quote form." />
      <div className="mb-4">
        <Suspense fallback={null}>
          <LeadsFilters />
        </Suspense>
      </div>
      <LeadsList leads={leads} />
    </div>
  );
}
