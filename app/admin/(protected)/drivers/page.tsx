import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/page-header";
import { DriversList } from "@/components/admin/drivers-list";
import { listDrivers } from "@/lib/data/drivers";

export const metadata: Metadata = { title: "Drivers" };

export default async function AdminDriversPage() {
  const drivers = await listDrivers();

  return (
    <div>
      <AdminPageHeader
        title="Drivers"
        description="Drivers available for WhatsApp dispatch on confirmed transfers."
      />
      <DriversList drivers={drivers} />
    </div>
  );
}
