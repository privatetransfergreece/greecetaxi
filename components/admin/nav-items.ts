import type { LucideIcon } from "lucide-react"
import { LayoutDashboard, Inbox, Clock, BadgeCheck, Receipt, Car, Settings } from "lucide-react"

export type AdminNavItem = { label: string; href: string; icon: LucideIcon }

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Leads", href: "/admin/leads", icon: Inbox },
  { label: "Upcoming Leads", href: "/admin/leads/upcoming", icon: Clock },
  { label: "Confirmed Leads", href: "/admin/leads/confirmed", icon: BadgeCheck },
  { label: "Invoices", href: "/admin/invoices", icon: Receipt },
  { label: "Drivers", href: "/admin/drivers", icon: Car },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]
