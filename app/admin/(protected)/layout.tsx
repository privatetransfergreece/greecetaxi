import { verifyAdminSession } from "@/lib/auth/dal";
import { AdminShell } from "@/components/admin/admin-shell";

// The entire admin CRM depends on a live auth session and live database
// reads — never a candidate for static prerendering.
export const dynamic = "force-dynamic";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifyAdminSession();

  return <AdminShell email={session.email}>{children}</AdminShell>;
}
