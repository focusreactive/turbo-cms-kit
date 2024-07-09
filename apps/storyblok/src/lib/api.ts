import {
  type ISbStoriesParams,
  type ISbStoryData,
} from "@storyblok/react/rsc";

const API_GATE = process.env.NEXT_PUBLIC_API_GATE;

// Get the actual SB cache version
export const getSBcacheCVparameter = async (isDraftMode: boolean) => {
  const searchParamsData: ISbStoriesParams = {
    token: process.env.SB_PREVIEW_TOKEN,
    version: isDraftMode ? "draft" : "published",
  };

  const searchParams = new URLSearchParams(
    searchParamsData as Record<string, string>,
  );

  const { cv: cacheVersion } = await fetch(
    `${API_GATE}/stories?${searchParams.toString()}`,
    {
      next: {
        tags: ["sb-cache-version"],
        ...(isDraftMode
          ? {
            revalidate: 0,
          }
          : {}),
      },
    },
  ).then((res) => res.json());

  return cacheVersion;
};

// The main function to fetch a story by slug
// Next.js data cache enabled
export async function fetchStoryBySlug(
  isDraftMode: boolean,
  slug: string[] = ["home"],
  params?: { cv?: number; resolve_relations?: string },
): Promise<{ story: ISbStoryData }> {

  const cv = await getSBcacheCVparameter(isDraftMode);

  const contentVersion = isDraftMode ? "draft" : "published";

  const searchParamsData: ISbStoriesParams = {
    token: process.env.SB_PREVIEW_TOKEN,
    cv,
    version: contentVersion,
    ...params,
  };

  const searchParams = new URLSearchParams(
    searchParamsData as Record<string, string>,
  );

  const { story } = await fetch(
    `${API_GATE}/stories/${slug?.join("/") || ""
    }?${searchParams.toString()}`,
  ).then((res) => res.json());

  return {
    story,
  };
}

// This function uses only on a build lvl to generate a sitemap
export async function fetchAllPages() {
  const cv = await getSBcacheCVparameter(false);

  const commonFetchParams: ISbStoriesParams = {
    version: "published",
    token: process.env.SB_PREVIEW_TOKEN,
    starts_with: process.env.NEXT_PUBLIC_DATA_ROOT,
    cv,
    per_page: 1000,
    // @ts-ignore
    include_dates: "1",
  };

  const searchParams = new URLSearchParams(
    commonFetchParams as Record<string, string>,
  );

  const linksResponse = await fetch(
    `${API_GATE}/links?${searchParams.toString()}`,
  );

  const pagesData = await linksResponse.json();
  const total = Number(linksResponse.headers.get("Total"));
  const lastPageNumber = Math.ceil(total / 1000);

  let pages: { slug: string; is_folder: boolean; published_at: string }[] =
    Object.values(pagesData.links);

  for (let i = 2; i <= lastPageNumber; i++) {
    const paginatedLinksResponse = await fetch(
      `${API_GATE}/links?${searchParams.toString()}&page=${i}`,
    );

    const paginatedLinksData = await paginatedLinksResponse.json();

    pages = pages.concat(Object.values(paginatedLinksData.links));
  }

  return pages;
}

// Fetch stories by params
// Next.js data cache enabled
export async function fetchStoriesByParams(
  isDraftModeEnabled: boolean,
  params?: ISbStoriesParams,
): Promise<{ data: ISbStoryData[]; headers: Headers }> {
  const contentVersion = isDraftModeEnabled ? "draft" : "published";
  const cv = await getSBcacheCVparameter(isDraftModeEnabled);

  const searchParamsData: ISbStoriesParams = {
    token: process.env.SB_PREVIEW_TOKEN,
    cv,
    version: contentVersion,
    ...params,
  };

  const searchParams = new URLSearchParams(
    searchParamsData as Record<string, string>,
  );

  try {
    const response = await fetch(
      `${API_GATE}/stories?${searchParams.toString()}`,
    );

    const data = await response.json();

    return { data: data.stories, headers: response.headers };
  } catch (error) {
    throw error;
  }
}

export async function checkDraftModeToken(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  let isDraftModeEnabled = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

  if (isDraftModeEnabled && process.env.NODE_ENV !== "development") {
    isDraftModeEnabled = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/checkToken?space_id=${searchParams?.["_storyblok_tk[space_id]"]}&timestamp=${searchParams?.["_storyblok_tk[timestamp]"]}&token=${searchParams?.["_storyblok_tk[token]"]}`,
    )
      .then((res) => res.json())
      .then((res) => res.result);
  }

  return isDraftModeEnabled;
}