import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/page-header";
import { siteConfig } from "@/lib/site-config";
import { CURRENCY } from "@/lib/currency";
import { isSupabaseConfigured } from "@/lib/supabase/admin-client";

export const metadata: Metadata = { title: "Settings" };

function Row({ label, value, ok }: { label: string; value: string; ok?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 py-3 last:border-0">
      <span className="text-sm text-slate">{label}</span>
      <span className={`text-sm font-medium ${ok === false ? "text-destructive" : "text-charcoal"}`}>{value}</span>
    </div>
  );
}

export default function AdminSettingsPage() {
  const supabaseConfigured = isSupabaseConfigured();
  const resendConfigured = Boolean(process.env.RESEND_API_KEY && process.env.FROM_EMAIL);
  const adminEmail = process.env.ADMIN_EMAIL;

  return (
    <div className="flex flex-col gap-6">
      <AdminPageHeader title="Settings" description="Current configuration for this Greece Taxi CRM." />

      <div className="rounded-2xl bg-white p-5 ring-1 ring-border">
        <h2 className="mb-2 font-heading text-sm font-semibold text-charcoal">Business</h2>
        <Row label="Business Name" value={siteConfig.name} />
        <Row label="Contact Email" value={siteConfig.contactEmail} />
        <Row label="Currency" value={CURRENCY} />
        <Row label="Website" value={siteConfig.url} />
      </div>

      <div className="rounded-2xl bg-white p-5 ring-1 ring-border">
        <h2 className="mb-2 font-heading text-sm font-semibold text-charcoal">System Status</h2>
        <Row label="Database (Supabase)" value={supabaseConfigured ? "Connected" : "Not configured"} ok={supabaseConfigured} />
        <Row label="Outbound Email (Resend)" value={resendConfigured ? "Configured" : "Not configured"} ok={resendConfigured} />
        <Row label="Admin Notification Address" value={adminEmail || "Not configured"} ok={Boolean(adminEmail)} />
      </div>

      <div className="rounded-2xl bg-white p-5 ring-1 ring-border">
        <h2 className="mb-2 font-heading text-sm font-semibold text-charcoal">Admin Accounts</h2>
        <p className="text-sm text-slate">
          There is no public sign-up. Add or remove admin accounts from the Supabase Dashboard under{" "}
          <strong>Authentication → Users</strong>. To change your own password, use Supabase&apos;s password reset flow
          for your admin email.
        </p>
      </div>
    </div>
  );
}
