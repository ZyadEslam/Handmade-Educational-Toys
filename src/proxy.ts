import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

/**
 * Gentlest possible routing: / forwards to the visitor's language
 * (Arabic when their browser prefers it, English otherwise).
 * /en and /ar are fully static and always work.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathLocale = pathname.split("/")[1];
  if (isLocale(pathLocale)) return NextResponse.next();

  if (pathname === "/" || pathname === "") {
    const acceptsAr = (request.headers.get("accept-language") ?? "")
      .toLowerCase()
      .split(",")
      .some((part) => part.startsWith("ar"));
    const locale = acceptsAr ? "ar" : defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Unknown top-level paths: keep them under the default locale.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|images|api|favicon|robots|sitemap|og|icon|.*\\..*).*)"],
};
