import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...["privacy", "terms", "delete-account"].map((p) => ({ url: `${site.url}/${p}`, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
