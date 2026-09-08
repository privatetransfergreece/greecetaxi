import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/page-header";
import { InvoiceForm } from "@/components/admin/invoice-form";
import { getLeadById } from "@/lib/data/leads";

export const metadata: Metadata = { title: "New Invoice" };

export default async function AdminNewInvoicePage({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string }>;
}) {
  const { leadId } = await searchParams;
  const lead = leadId ? await getLeadById(leadId) : null;

  return (
    <div>
      <AdminPageHeader title="New Invoice" description="Create an invoice with a secure link the customer can view online." />
      <InvoiceForm defaultLeadId={lead?.id} defaultName={lead?.full_name} defaultEmail={lead?.email} />
    </div>
  );
}
