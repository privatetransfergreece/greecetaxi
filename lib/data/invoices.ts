import "server-only"

import { verifyAdminSession } from "@/lib/auth/dal"
import { createAdminClient } from "@/lib/supabase/admin-client"
import type { Invoice } from "@/lib/supabase/types"

export async function listInvoices(): Promise<Invoice[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("invoices").select("*").order("created_at", { ascending: false })
  if (error) {
    console.error("[invoices] Failed to list invoices:", error)
    return []
  }
  return data ?? []
}

export async function getInvoiceById(id: string): Promise<Invoice | null> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("invoices").select("*").eq("id", id).maybeSingle()
  if (error) {
    console.error("[invoices] Failed to fetch invoice:", error)
    return null
  }
  return data
}

/** No admin session required — this is the public tokenized lookup used by app/invoice/[token]/page.tsx. The unguessable token is the only credential. */
export async function getInvoiceByToken(token: string): Promise<Invoice | null> {
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("invoices").select("*").eq("access_token", token).maybeSingle()
  if (error) {
    console.error("[invoices] Failed to fetch invoice by token:", error)
    return null
  }
  return data
}
