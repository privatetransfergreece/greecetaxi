import type { ReactNode } from "react"

function AdminPageHeader({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-xl font-semibold text-charcoal sm:text-2xl">{title}</h1>
        {description ? <p className="text-sm text-slate">{description}</p> : null}
      </div>
      {action}
    </div>
  )
}

export { AdminPageHeader }
