import type { MetadataRoute } from "next";
import { EVENT } from "@/constants/event";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: EVENT.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
