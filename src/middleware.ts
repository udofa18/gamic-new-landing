import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;

  // Static files and assets (images, etc.) will be served without redirect
  if (
    pathname.startsWith('/_next') || // Next.js static files (bundles, etc.)
    pathname.startsWith('/public') || // Public folder assets (including images)
    pathname.startsWith('/favicon.ico') || // Favicon
    pathname.endsWith('.jpg') || // Allow .jpg images
    pathname.endsWith('.jpeg') || // Allow .jpeg images
    pathname.endsWith('.png') || // Allow .png images
    pathname.endsWith('.gif') || // Allow .gif images
    pathname.endsWith('.svg') || // Allow .svg images
    pathname.endsWith('.webp') || // Allow .webp images
    pathname === '/' // Root path
  ) {
    return NextResponse.next();
  }

  // Define the paths that should be redirected (without query parameters)
  const pathsToRedirect = [
    '/login',
    '/privacy',
    '/terms',
    '/wc',
  ];

  // Regex for dynamic paths
  const dynamicPathsRegex = [
    /^\/s\/[^/]+\/u\/[^/]+$/,  // /s/:name/u/:inviterId
    /^\/g\/[^/]+$/,            // /g/:name
    /^\/s\/[^/]+$/,            // /s/:bsId
  ];

  // Check if the current pathname matches any of the redirect paths or dynamic paths
  const isStaticPathMatch = pathsToRedirect.includes(pathname);
  const isDynamicMatch = dynamicPathsRegex.some((regex) => regex.test(pathname));

  // Handle special case for /login with query parameters
  if (pathname.startsWith('/login')) {
    // Redirect any /login paths with query parameters
    const redirectUrl = `https://dev.gamic.pro${pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(redirectUrl, 302); // Temporary redirect
  }

  // If it matches a static or dynamic path, redirect to dev.gamic.pro
  if (isStaticPathMatch || isDynamicMatch) {
    const redirectUrl = `https://dev.gamic.pro${pathname}`;
    return NextResponse.redirect(redirectUrl, 302); // Temporary redirect
  }

  // If not a path to be redirected, proceed with normal response
  return NextResponse.next();
}
