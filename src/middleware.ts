import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("Cookie");

  const publicRoutes = ["/login", "/register"];
  const privateRoutes = ["/dashboard"];

  const url = request.nextUrl.clone();

  if (publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }
  if (privateRoutes.includes(url.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
}
