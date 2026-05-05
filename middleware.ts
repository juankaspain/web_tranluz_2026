import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale, localeFromAcceptLanguage, localeFromCountry } from "@/i18n/config";


export function middleware(request: NextRequest) {
  // Excluir assets estáticos de Next.js
  if (request.nextUrl.pathname.startsWith('/_next/')) {
    return NextResponse.next();
  }
  const cookieLocale = request.cookies.get("tranluz_locale")?.value;
  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry");
  const detectedLocale =
    (isLocale(cookieLocale) && cookieLocale) ||
    localeFromCountry(country) ||
    localeFromAcceptLanguage(request.headers.get("accept-language")) ||
    defaultLocale;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tranluz-locale", detectedLocale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  if (!isLocale(cookieLocale)) {
    response.cookies.set("tranluz_locale", detectedLocale, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      path: "/"
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
