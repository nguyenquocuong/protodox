import { createServerClient } from "@supabase/ssr";
import type { NextRequest, ProxyConfig } from "next/server";
import { NextResponse } from "next/server";
import { env } from "@/lib/env";

const authRoutes = ["/signup", "/login", "/auth/callback"];

const protectedRoutes: string[] = [];

function isMatch(pathname: string, routes: string[]): boolean {
  return routes.some((route) => pathname.startsWith(route));
}

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // Create Supabase client with proper cookie handling
  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  // IMPORTANT: Refresh session if expired by calling getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const loginUrl = new URL("/login", request.url);
  const homeUrl = new URL("/", request.url);

  // Handle auth routes - redirect to home if already logged in
  if (isMatch(pathname, authRoutes)) {
    if (user) {
      return NextResponse.redirect(homeUrl);
    }
  }

  // Handle protected routes - redirect to login if not authenticated
  if (isMatch(pathname, protectedRoutes)) {
    if (!user) {
      return NextResponse.redirect(loginUrl);
    }
  }

  // IMPORTANT: Return the supabaseResponse to preserve cookie updates
  return supabaseResponse;
}

export const config: ProxyConfig = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
