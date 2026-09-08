import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/page-header";
import { InvoiceDetail } from "@/components/admin/invoice-detail";
import { getInvoiceById } from "@/lib/data/invoices";

export const metadata: Metadata = { title: "Invoice Detail" };

export default async function AdminInvoiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) notFound();

  return (
    <div>
      <AdminPageHeader title={invoice.invoice_number} description="Invoice detail" />
      <InvoiceDetail invoice={invoice} />
    </div>
  );
}
