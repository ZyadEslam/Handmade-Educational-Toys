import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = { en: "/en", ar: "/ar" };
  const entries: MetadataRoute.Sitemap = [];

  for (const entry of Object.entries(languages)) {
    entries.push({
      url: `${SITE.baseUrl}${entry[1]}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE.baseUrl}/og.png`],
      alternates: { languages },
    });
  }

  return entries;
}
