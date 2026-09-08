import "server-only"
import { createClient } from "@supabase/supabase-js"

import type { Database } from "@/lib/supabase/types"

/**
 * Service-role Supabase client for all application data access (leads,
 * drivers, invoices, logs). Bypasses RLS by design — every table has RLS
 * enabled with no anon/authenticated policies, so this client (server-only,
 * never imported by a Client Component) is the only way in. Callers are
 * responsible for verifying the admin session (see lib/auth/dal.ts) before
 * using this for anything other than the public quote-submission insert.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    )
  }

  return createClient<Database>(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/** True once the Supabase env vars needed for data access are present. */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}
