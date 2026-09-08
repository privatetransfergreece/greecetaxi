import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getInvoiceByToken } from "@/lib/data/invoices";
import { formatCurrency } from "@/lib/currency";
import { PaymentStatusBadge } from "@/components/admin/status-badge";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Your Invoice", robots: { index: false, follow: false } };

// Always read fresh from the database — never cache a token-gated invoice page.
export const dynamic = "force-dynamic";

export default async function PublicInvoicePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const invoice = await getInvoiceByToken(token);
  if (!invoice) notFound();

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 px-4 py-10 sm:py-16 print:py-0">
      <div className="flex items-center justify-between">
        <span className="font-heading text-lg font-semibold text-charcoal">{siteConfig.name}</span>
        <button
          className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-charcoal hover:border-teal-deep print:hidden"
          data-print-trigger
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 ring-1 ring-border sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/70 pb-6">
          <div>
            <p className="text-xs tracking-wide text-slate uppercase">Invoice</p>
            <p className="font-mono text-sm text-charcoal">{invoice.invoice_number}</p>
          </div>
          <PaymentStatusBadge status={invoice.payment_status} />
        </div>

        <div className="grid gap-4 py-6 sm:grid-cols-2">
          <div>
            <p className="text-xs tracking-wide text-slate uppercase">Billed To</p>
            <p className="text-sm font-medium text-charcoal">{invoice.customer_name}</p>
            <p className="text-sm text-slate">{invoice.customer_email}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs tracking-wide text-slate uppercase">Date</p>
            <p className="text-sm text-charcoal">{new Date(invoice.created_at).toLocaleDateString("en-GB")}</p>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-xs tracking-wide text-slate uppercase">
              <th className="pb-2 text-left">Description</th>
              <th className="pb-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.line_items.map((item, i) => (
              <tr key={i} className="border-b border-border/60">
                <td className="py-2 text-charcoal">{item.description}</td>
                <td className="py-2 text-right text-charcoal">{formatCurrency(item.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end pt-4">
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs tracking-wide text-slate uppercase">Total Due</span>
            <span className="font-heading text-2xl font-semibold text-charcoal">{formatCurrency(invoice.amount)}</span>
          </div>
        </div>

        {invoice.payment_method ? (
          <p className="mt-4 border-t border-border/70 pt-4 text-sm text-slate">Payment method: {invoice.payment_method}</p>
        ) : null}
        {invoice.notes ? <p className="mt-2 text-sm text-slate">{invoice.notes}</p> : null}
      </div>

      <p className="text-center text-xs text-slate">
        Questions about this invoice? Contact {siteConfig.contactEmail}
      </p>

      <script
        dangerouslySetInnerHTML={{
          __html: `document.querySelector('[data-print-trigger]')?.addEventListener('click', () => window.print());`,
        }}
      />
    </div>
  );
}
