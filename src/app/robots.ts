import type { MetadataRoute } from "next";

const CANONICAL_HOST = "\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440-\u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e-\u0442\u0438\u043f\u0430.\u0440\u0444";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${CANONICAL_HOST}`;
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    host: CANONICAL_HOST,
    sitemap: `${base}/sitemap.xml`,
  };
}
