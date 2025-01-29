import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  const redirectBaseUrl = process.env.NEXT_REDIRECT_URL 

  // Static files and assets (images, etc.) will be served without redirect
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/public') || 
    pathname.startsWith('/favicon.ico') || 
    pathname.endsWith('.jpg') || 
    pathname.endsWith('.jpeg') || 
    pathname.endsWith('.png') || 
    pathname.endsWith('.gif') || 
    pathname.endsWith('.svg') || 
    pathname.endsWith('.webp') || 
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  const pathsToRedirect = ['/login', '/privacy', '/terms', '/wc'];

  const dynamicPathsRegex = [
    /^\/s\/[^/]+\/u\/[^/]+$/,
    /^\/g\/[^/]+$/,
    /^\/s\/[^/]+$/,
  ];

  const isStaticPathMatch = pathsToRedirect.includes(pathname);
  const isDynamicMatch = dynamicPathsRegex.some((regex) => regex.test(pathname));

  if (pathname.startsWith('/login')) {
    const redirectUrl = `${redirectBaseUrl}${pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(redirectUrl, 302);
  }

  if (isStaticPathMatch || isDynamicMatch) {
    const redirectUrl = `${redirectBaseUrl}${pathname}`;
    return NextResponse.redirect(redirectUrl, 302);
  }

  return NextResponse.next();
}
