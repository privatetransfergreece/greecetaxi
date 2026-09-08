import { NextResponse, type NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"

const PUBLIC_ADMIN_PATHS = ["/admin/login"]

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAdminRoute = pathname.startsWith("/admin")
  const isInvoiceRoute = pathname.startsWith("/invoice")

  let response = NextResponse.next({ request })

  if (isAdminRoute) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Optimistic check only: confirms a session exists so we can redirect
    // before rendering. Every admin page/Server Action still calls
    // verifyAdminSession() (lib/auth/dal.ts) as the real authorization gate.
    if (url && anonKey) {
      const supabase = createServerClient(url, anonKey, {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            for (const { name, value } of cookiesToSet) {
              request.cookies.set(name, value)
            }
            response = NextResponse.next({ request })
            for (const { name, value, options } of cookiesToSet) {
              response.cookies.set(name, value, options)
            }
          },
        },
      })

      const {
        data: { user },
      } = await supabase.auth.getUser()

      const isPublicAdminPath = PUBLIC_ADMIN_PATHS.some((p) => pathname === p || pathname === `${p}/`)

      if (!user && !isPublicAdminPath) {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      }

      if (user && isPublicAdminPath) {
        return NextResponse.redirect(new URL("/admin", request.url))
      }
    }
  }

  if (isAdminRoute || isInvoiceRoute) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
  }

  return response
}

export const config = {
  matcher: ["/admin/:path*", "/invoice/:path*"],
}
