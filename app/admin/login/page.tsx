import type { Metadata } from "next";

import { LoginForm } from "@/components/admin/login-form";
import { MapPinned } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-deep px-4 py-12">
      <div className="flex w-full max-w-sm flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-ivory/10 text-ivory ring-1 ring-ivory/15">
            <MapPinned className="size-5.5" strokeWidth={2} />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="font-heading text-lg font-semibold text-ivory">{siteConfig.shortName}</span>
            <span className="text-xs font-medium tracking-[0.14em] text-ivory/50 uppercase">Admin Dashboard</span>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
