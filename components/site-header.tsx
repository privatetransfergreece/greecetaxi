"use client"

import Link from "next/link"
import { Menu, MapPinned } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import { isNavDropdown, layoutContent } from "@/content/layout"
import type { Locale } from "@/lib/i18n/config"
import { pathFor, withLocalePrefix } from "@/lib/i18n/routes"
import { siteConfig } from "@/lib/site-config"

function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={withLocalePrefix("/", locale)}
      className="flex items-center gap-2 font-heading text-lg font-semibold text-teal-deep"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-teal-deep text-ivory">
        <MapPinned className="size-4.5" strokeWidth={2} />
      </span>
      <span className="leading-none">
        {siteConfig.shortName}
        <span className="text-coral">.</span>
      </span>
    </Link>
  )
}

function SiteHeader({ locale }: { locale: Locale }) {
  const t = layoutContent[locale]
  const quoteHref = pathFor("getQuote", locale)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-ivory/90 backdrop-blur-md supports-backdrop-filter:bg-ivory/75">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-7 lg:flex">
          {t.nav.map((item) =>
            isNavDropdown(item) ? (
              <NavigationMenu key={item.href} className="max-w-none flex-none">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-auto bg-transparent p-0 text-sm font-medium text-charcoal/80 hover:bg-transparent hover:text-teal-deep focus:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-64 gap-0.5 p-2">
                        {item.items.map((sub) => (
                          <li key={sub.href}>
                            <NavigationMenuLink render={<Link href={sub.href} />}>
                              {sub.label}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-border p-2">
                        <NavigationMenuLink
                          render={<Link href={item.href} />}
                          className="font-semibold text-teal-deep"
                        >
                          {item.viewAllLabel}
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-teal-deep"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button
            className="bg-coral text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={quoteHref}>{t.getQuote}</Link>}
          />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            size="sm"
            className="bg-coral text-white hover:bg-coral/90"
            nativeButton={false}
            render={<Link href={quoteHref}>{t.getQuote}</Link>}
          />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label={t.openMenu} />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-ivory">
              <SheetHeader>
                <SheetTitle>
                  <Logo locale={locale} />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 overflow-y-auto px-4">
                {t.nav.map((item) =>
                  isNavDropdown(item) ? (
                    <div key={item.href} className="flex flex-col gap-0.5 py-1.5">
                      <span className="px-3 text-xs font-semibold tracking-[0.1em] text-slate uppercase">
                        {item.label}
                      </span>
                      {item.items.map((sub) => (
                        <SheetClose
                          key={sub.href}
                          nativeButton={false}
                          render={
                            <Link
                              href={sub.href}
                              className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-sand"
                            />
                          }
                        >
                          {sub.label}
                        </SheetClose>
                      ))}
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-sm font-semibold text-teal-deep transition-colors hover:bg-sand"
                          />
                        }
                      >
                        {item.viewAllLabel}
                      </SheetClose>
                    </div>
                  ) : (
                    <SheetClose
                      key={item.href}
                      nativeButton={false}
                      render={
                        <Link
                          href={item.href}
                          className="rounded-lg px-3 py-2.5 text-base font-medium text-charcoal transition-colors hover:bg-sand"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  )
                )}
              </nav>
              <div className="border-t border-border/70 px-4 pt-4">
                <LanguageSwitcher locale={locale} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

export { SiteHeader }
