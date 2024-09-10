import { type MetadataRoute } from "next";

import { generateSitemap } from "@/lib/loader/generateSitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await generateSitemap("page");

  const sitemap = slugs.map(({ slug, _createdAt }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}${slug === "/" ? "" : slug}`,
    lastModified: new Date(_createdAt),
  }));

  return sitemap;
}
