import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "nl", "de"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
    // Simple check for accept-language or just default
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage && acceptLanguage.includes("nl")) return "nl";
    if (acceptLanguage && acceptLanguage.includes("de")) return "de";
    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Ignore static files, images, etc.
    if (
        pathname.startsWith("/images") ||
        pathname.startsWith("/_next") ||
        pathname.includes(".")
    ) {
        return;
    }

    // Redirect to localized path
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|images|api|favicon.ico).*)",
    ],
};
