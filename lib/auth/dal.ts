import "server-only"
import { cache } from "react"
import { redirect } from "next/navigation"

import { createAuthServerClient } from "@/lib/supabase/auth-server"

export type AdminSession = { userId: string; email: string }

/**
 * Verifies the admin's Supabase Auth session. Memoized per request with
 * React's cache() so multiple calls during one render only hit Supabase once.
 * Redirects to /admin/login when there is no valid session — call this at
 * the top of every protected admin page/layout and inside every Server
 * Action that mutates CRM data.
 */
export const verifyAdminSession = cache(async (): Promise<AdminSession> => {
  const supabase = await createAuthServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  return { userId: user.id, email: user.email ?? "" }
})

/** Same check, but returns null instead of redirecting — for Server Actions
 * that need to fail gracefully rather than navigate. */
export const getAdminSession = cache(async (): Promise<AdminSession | null> => {
  const supabase = await createAuthServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null
  return { userId: user.id, email: user.email ?? "" }
})
