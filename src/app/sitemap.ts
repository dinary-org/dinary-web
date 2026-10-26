import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { isLandingPublic } from "@/lib/visibility";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isLandingPublic()) return [];
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
