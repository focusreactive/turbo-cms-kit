import { type MetadataRoute } from "next";

import { loadPages } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await loadPages();

  const sitemap = pages.map((page) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}${page.pathname?.current}`,
    lastModified: new Date(page._createdAt),
  }));

  return sitemap;
}
