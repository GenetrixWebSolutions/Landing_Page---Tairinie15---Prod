import type { MetadataRoute } from "next";
import { EVENT } from "@/constants/event";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/convite/", "/api/"] },
    sitemap: `${EVENT.siteUrl}/sitemap.xml`,
  };
}
