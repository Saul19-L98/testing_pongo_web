import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("Cookie");

  const url = request.nextUrl.clone();

  if (url.pathname.endsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
