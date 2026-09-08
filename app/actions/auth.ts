"use server"

import { redirect } from "next/navigation"

import { createAuthServerClient } from "@/lib/supabase/auth-server"

export type LoginState = { error?: string } | undefined

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim()
  const password = String(formData.get("password") ?? "")

  if (!email || !password) {
    return { error: "Enter your email and password." }
  }

  const supabase = await createAuthServerClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: "Invalid email or password." }
  }

  redirect("/admin")
}

export async function logout() {
  const supabase = await createAuthServerClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}
