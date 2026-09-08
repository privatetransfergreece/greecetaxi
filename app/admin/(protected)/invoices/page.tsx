import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";

import { AdminPageHeader } from "@/components/admin/page-header";
import { PaymentStatusBadge } from "@/components/admin/status-badge";
import { listInvoices } from "@/lib/data/invoices";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Invoices" };

export default async function AdminInvoicesPage() {
  const invoices = await listInvoices();

  return (
    <div>
      <AdminPageHeader
        title="Invoices"
        description="Invoices issued to customers, with a private link for online viewing."
        action={
          <Button nativeButton={false} render={<Link href="/admin/invoices/new" />} className="h-10 gap-1.5 bg-coral px-5 text-white hover:bg-coral/90">
            <Plus className="size-4" />
            New Invoice
          </Button>
        }
      />

      {invoices.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center text-sm text-slate ring-1 ring-border">
          No invoices yet.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {invoices.map((invoice) => (
            <Link
              key={invoice.id}
              href={`/admin/invoices/${invoice.id}`}
              className="flex flex-col gap-2 rounded-2xl bg-white p-4 ring-1 ring-border sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xs text-slate">{invoice.invoice_number}</span>
                <span className="font-heading text-sm font-semibold text-charcoal">{invoice.customer_name}</span>
                <span className="text-xs text-slate">{invoice.customer_email}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-heading text-base font-semibold text-charcoal">{formatCurrency(invoice.amount)}</span>
                <PaymentStatusBadge status={invoice.payment_status} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
