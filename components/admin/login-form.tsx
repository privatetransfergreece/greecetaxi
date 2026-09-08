"use client"

import { useActionState } from "react"
import { AlertCircle, ArrowRight } from "lucide-react"

import { login } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"

function LoginForm() {
  const [state, formAction, pending] = useActionState(login, undefined)

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-xl shadow-black/10 sm:p-8"
    >
      {state?.error ? (
        <div className="flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{state.error}</span>
        </div>
      ) : null}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-charcoal">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-10 rounded-lg border border-border bg-white px-3 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium text-charcoal">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="h-10 rounded-lg border border-border bg-white px-3 text-sm text-charcoal outline-none focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        focusableWhenDisabled
        className="h-11 w-full bg-coral text-base font-semibold text-white hover:bg-coral/90 disabled:opacity-70"
      >
        {pending ? "Signing in..." : "Sign In"}
        {!pending ? <ArrowRight data-icon="inline-end" className="size-4" /> : null}
      </Button>
    </form>
  )
}

export { LoginForm }
