import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedRoutes = ["/dashboard"]
const publicRoutes = ["/login", "/register"]

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("luh_token")?.value
  const { pathname } = request.nextUrl

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // if there's no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // checking if the user is logged in and tries to access a public route
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// routes to be checked by middleware
export const config = {
  matcher: ["/dashboard", "/login", "/register"],
}
