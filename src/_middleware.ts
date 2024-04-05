// pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getTokenFromCookie } from "@/lib/cookie";

export function middleware(req: NextRequest) {
  const token = getTokenFromCookie((req as any).cookies);

  const loginPath = "/login";
  if (!token && !req.nextUrl.pathname.startsWith(loginPath)) {
    return NextResponse.redirect(new URL(loginPath, req.url));
  }
}
