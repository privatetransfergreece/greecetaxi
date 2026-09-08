"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, MapPinned } from "lucide-react"

import { adminNavItems } from "@/components/admin/nav-items"
import { logout } from "@/app/actions/auth"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col bg-teal-deep text-ivory">
      <div className="flex items-center gap-2.5 px-5 py-6">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-ivory ring-1 ring-ivory/15">
          <MapPinned className="size-4.5" strokeWidth={2} />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="font-heading text-sm font-semibold text-ivory">{siteConfig.shortName}</span>
          <span className="text-[11px] font-medium tracking-[0.1em] text-ivory/50 uppercase">Admin</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {adminNavItems.map((item) => {
          const Icon = item.icon
          const active = isActive(pathname, item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active ? "bg-ivory/10 text-ivory" : "text-ivory/65 hover:bg-ivory/5 hover:text-ivory"
              )}
            >
              <Icon className="size-4.5 shrink-0" strokeWidth={2} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-ivory/10 p-3">
        <form action={logout}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ivory/65 transition-colors hover:bg-ivory/5 hover:text-ivory"
          >
            <LogOut className="size-4.5 shrink-0" strokeWidth={2} />
            Log Out
          </button>
        </form>
      </div>
    </div>
  )
}

export { SidebarNav }
