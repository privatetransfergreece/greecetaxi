import type { Metadata } from "next";
import Link from "next/link";
import { Inbox, BadgeCheck, Clock, CheckCircle2, XCircle, LayoutGrid } from "lucide-react";

import { AdminPageHeader } from "@/components/admin/page-header";
import { StatCard } from "@/components/admin/stat-card";
import { LeadsList } from "@/components/admin/leads-list";
import { getDashboardStats, listRecentLeads, listUpcomingTransfers } from "@/lib/data/leads";

export const metadata: Metadata = { title: "Dashboard" };

export default async function AdminDashboardPage() {
  const [stats, recentLeads, upcoming] = await Promise.all([
    getDashboardStats(),
    listRecentLeads(6),
    listUpcomingTransfers(5),
  ]);

  return (
    <div>
      <AdminPageHeader title="Dashboard" description="An overview of Greece Taxi transfer requests." />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <StatCard label="All Leads" value={stats.total} icon={LayoutGrid} tint="slate" />
        <StatCard label="Pending" value={stats.pending} icon={Inbox} tint="amber" />
        <StatCard label="Confirmed" value={stats.confirmed} icon={BadgeCheck} tint="teal" />
        <StatCard label="Upcoming" value={stats.upcoming} icon={Clock} tint="coral" />
        <StatCard label="Completed" value={stats.completed} icon={CheckCircle2} tint="green" />
        <StatCard label="Lost" value={stats.lost} icon={XCircle} tint="red" />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-base font-semibold text-charcoal">Recent Requests</h2>
          <Link href="/admin/leads" className="text-sm font-semibold text-teal-deep hover:text-coral">
            View all
          </Link>
        </div>
        <LeadsList leads={recentLeads} />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-base font-semibold text-charcoal">Upcoming Transfers</h2>
          <Link href="/admin/leads/upcoming" className="text-sm font-semibold text-teal-deep hover:text-coral">
            View all
          </Link>
        </div>
        <LeadsList leads={upcoming} />
      </div>
    </div>
  );
}
