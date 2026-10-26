import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { isLandingPublic } from "@/lib/visibility";

export default function robots(): MetadataRoute.Robots {
  if (!isLandingPublic()) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
