"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { SidebarNav } from "@/components/admin/sidebar-nav"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"

function AdminShell({ email, children }: { email: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen bg-[#f6f4ee]">
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="fixed h-screen w-64">
          <SidebarNav />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-border/70 bg-white px-4 lg:px-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex size-9 items-center justify-center rounded-lg text-charcoal hover:bg-muted lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
          <span className="hidden font-heading text-base font-semibold text-charcoal lg:block">Admin Dashboard</span>
          <span className="ml-auto truncate text-sm text-slate">{email}</span>
        </header>

        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Admin navigation</SheetTitle>
          <SidebarNav onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export { AdminShell }
