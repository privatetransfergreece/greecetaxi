function ExcerptLead({ excerpt }: { excerpt: string }) {
  return (
    <p className="border-l-4 border-coral pl-5 text-lg leading-relaxed text-charcoal/90 sm:text-xl">{excerpt}</p>
  )
}

export { ExcerptLead }
