import { cn } from "@/lib/utils"

function SectionEyebrow({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-teal uppercase",
        className
      )}
    >
      <span className="h-px w-6 bg-coral" aria-hidden="true" />
      {children}
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-charcoal sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export { SectionHeading, SectionEyebrow }
