import "server-only"
import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

/**
 * Supabase client bound to the current request's cookies — used only to
 * verify/manage the admin's Auth session (login, logout, getUser). Uses the
 * public anon key, which is safe: Supabase Auth's own token validation is
 * what actually gates access, and this client is never used to read or
 * write application data (see lib/supabase/admin-client.ts for that).
 */
export async function createAuthServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    )
  }

  const cookieStore = await cookies()

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options)
          }
        } catch {
          // Called from a Server Component render (no response to write to).
          // The proxy refreshes the session on navigation instead.
        }
      },
    },
  })
}
