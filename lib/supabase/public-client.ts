import "server-only"
import { createClient } from "@supabase/supabase-js"

import type { Database } from "@/lib/supabase/types"

/**
 * Anon-key Supabase client for public, RLS-gated content reads (currently:
 * the blog). Unlike lib/supabase/admin-client.ts, this does NOT bypass RLS —
 * it relies on the "published"-only SELECT policies from
 * supabase/migrations/0004_blog.sql to keep drafts private, so it must never
 * be used for leads/drivers/invoices or any other table without a public
 * policy of its own.
 */
export function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    )
  }

  return createClient<Database>(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
