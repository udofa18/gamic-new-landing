import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/' || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Redirect to dev.gamic.pro with the relative path appended
  const redirectUrl = `https://dev.gamic.pro${pathname}`;
  return NextResponse.redirect(redirectUrl, 302); // Temporary redirect
}
