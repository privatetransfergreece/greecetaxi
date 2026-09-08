"use client"

import * as React from "react"
import { Field as FieldPrimitive } from "@base-ui/react/field"

import { cn } from "@/lib/utils"

function Field({ className, ...props }: FieldPrimitive.Root.Props) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  required,
  children,
  ...props
}: FieldPrimitive.Label.Props & { required?: boolean }) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn(
        "flex items-center gap-1 text-sm font-medium text-charcoal",
        className
      )}
      {...props}
    >
      {children}
      {required ? (
        <span className="text-coral" aria-hidden="true">
          *
        </span>
      ) : null}
    </FieldPrimitive.Label>
  )
}

function FieldDescription({
  className,
  ...props
}: FieldPrimitive.Description.Props) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-xs leading-relaxed text-slate", className)}
      {...props}
    />
  )
}

function FieldError({ className, ...props }: FieldPrimitive.Error.Props) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn(
        "text-xs leading-relaxed font-medium text-destructive",
        className
      )}
      {...props}
    />
  )
}

const FieldControl = FieldPrimitive.Control

export { Field, FieldLabel, FieldDescription, FieldError, FieldControl }
