import { type MetadataRoute } from "next";
import type { ISbStoriesParams } from "@storyblok/react/rsc";

import { fetchStoriesByParams } from "@/lib/api";

const isDraftModeEnv = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";
const storiesPerPageSize = 100;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const commonFetchParams: ISbStoriesParams = {
    per_page: storiesPerPageSize,
    content_type: "page",
    version: isDraftModeEnv ? "draft" : "published",
  };
  const { data, headers } = await fetchStoriesByParams(
    isDraftModeEnv,
    commonFetchParams,
  );

  const totalStories = Number(headers.get("Total"));
  const lastPageNumber = Math.ceil(totalStories / storiesPerPageSize);

  const pagesPromises: ReturnType<typeof fetchStoriesByParams>[] = [];
  for (let i = 2; i <= lastPageNumber; i++) {
    const promise = fetchStoriesByParams(isDraftModeEnv, {
      ...commonFetchParams,
      page: i,
    });

    pagesPromises.push(promise);
  }

  const pagesData = await Promise.all(pagesPromises);
  const allPaginatedData = pagesData.reduce(
    (acc, { data }) => [...acc, ...data],
    data,
  );

  const filteredStories = allPaginatedData.filter((page) => {
    if (page.is_folder) {
      return false;
    }

    if (page.content.robots === "no-index") {
      return false;
    }

    return true;
  });

  const sitemap = filteredStories.map((page) => {
    const correctPath = page.full_slug.split("/").filter(Boolean);

    return {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${correctPath.join("/")}`,
      lastModified: new Date(page.published_at as string),
    };
  });

  return sitemap;
}
