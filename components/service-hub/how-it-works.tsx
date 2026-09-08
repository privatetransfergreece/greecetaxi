import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ServiceHubContent } from "@/content/service-hubs"

function ServiceHowItWorks({ content }: { content: ServiceHubContent["howItWorks"] }) {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading align="center" eyebrow={content.eyebrow} title={content.title} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <Card key={step.title} className="ring-1 ring-border">
              <CardHeader>
                <span className="mb-3 flex size-11 items-center justify-center rounded-xl bg-teal-deep font-heading text-base font-semibold text-ivory">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CardTitle className="text-base">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { ServiceHowItWorks }
