import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Canonical Unicode host (escaped to avoid source file encoding issues)
const UNICODE_HOST =
  "\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440-\u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e-\u0442\u0438\u043f\u0430.\u0440\u0444";
// Known punycode form seen in redirects
const PUNYCODE_HOST = "xn-----6kcbbkhd9abgr0bscbbujwql0i.xn--p1ai";

const ALLOW_HOSTS = new Set<string>([
  "localhost",
  "127.0.0.1",
  "[::1]",
  "0.0.0.0",
  "vl-land-ind.vercel.app",
]);

const OUR_HOSTS = new Set<string>([
  UNICODE_HOST,
  `www.${UNICODE_HOST}`,
  PUNYCODE_HOST,
  `www.${PUNYCODE_HOST}`,
]);

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  const xfh = (req.headers.get("x-forwarded-host") || "").split(",")[0].trim();
  const hostHeader = req.headers.get("host") || ""; // may include port
  const host = (xfh || hostHeader || url.hostname).split(":")[0].toLowerCase();

  const protoHeader = (
    req.headers.get("x-forwarded-proto") ||
    url.protocol ||
    ""
  )
    .toString()
    .replace(":", "")
    .toLowerCase();

  // Skip redirects during local development and for allowlisted hosts
  if (process.env.NODE_ENV !== "production" || ALLOW_HOSTS.has(host)) {
    return NextResponse.next();
  }

  // Only enforce canonicalization for our domains (unicode/punycode, with/without www)
  if (!OUR_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const needsHost = host !== UNICODE_HOST;
  const needsHttps = protoHeader !== "https";
  if (needsHost || needsHttps) {
    url.hostname = UNICODE_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:css|js|png|jpg|jpeg|svg|webp|ico|txt|xml|map)).*)",
  ],
};
