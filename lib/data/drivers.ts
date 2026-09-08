import "server-only"

import { verifyAdminSession } from "@/lib/auth/dal"
import { createAdminClient } from "@/lib/supabase/admin-client"
import type { Driver, DispatchLogEntry } from "@/lib/supabase/types"

export async function listDrivers(): Promise<Driver[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("drivers").select("*").order("name", { ascending: true })
  if (error) {
    console.error("[drivers] Failed to list drivers:", error)
    return []
  }
  return data ?? []
}

export async function listActiveDrivers(): Promise<Driver[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("drivers")
    .select("*")
    .eq("status", "active")
    .order("name", { ascending: true })
  if (error) {
    console.error("[drivers] Failed to list active drivers:", error)
    return []
  }
  return data ?? []
}

export async function getDriverById(id: string): Promise<Driver | null> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("drivers").select("*").eq("id", id).maybeSingle()
  if (error) {
    console.error("[drivers] Failed to fetch driver:", error)
    return null
  }
  return data
}

export async function getDispatchHistoryForLead(leadId: string): Promise<(DispatchLogEntry & { driver_name: string | null })[]> {
  await verifyAdminSession()
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("dispatch_log")
    .select("*, drivers(name)")
    .eq("lead_id", leadId)
    .order("contacted_at", { ascending: false })

  if (error) {
    console.error("[drivers] Failed to fetch dispatch history:", error)
    return []
  }

  return (data ?? []).map((row) => {
    const { drivers, ...rest } = row as unknown as DispatchLogEntry & { drivers: { name: string } | null }
    return { ...rest, driver_name: drivers?.name ?? null }
  })
}
