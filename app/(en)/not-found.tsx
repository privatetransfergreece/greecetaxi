import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <span className="font-heading text-6xl font-semibold text-teal-deep">
        404
      </span>
      <h1 className="font-heading text-2xl font-semibold text-charcoal sm:text-3xl">
        Page Not Found
      </h1>
      <p className="max-w-md text-base text-slate">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Button
        className="mt-2 h-11 bg-coral px-6 text-base text-white hover:bg-coral/90"
        nativeButton={false}
        render={<Link href="/" />}
      >
        Back to Homepage
      </Button>
    </Container>
  );
}
