import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import {
  apiPlugin,
  storyblokInit,
  type ISbStoriesParams,
} from "@storyblok/react/rsc";

import { COMPONENTS } from "@/constants/sbComponents";

const CONTENT_VERSION = process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION as
  | "published"
  | "draft";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: COMPONENTS,
}) as any;

export async function fetchStory(slug?: string[]) {
  const storyblokApi = getStoryblokApi();
  const sbParams: ISbStoriesParams = {
    version: CONTENT_VERSION,
    resolve_links: "url",
  };
  const { data } = await storyblokApi.get(
    `cdn/stories/${slug ? slug.join("/") : "home"}`,
    sbParams,
  );

  return data;
}

export async function fetchAllPages() {
  const storyblokApi = getStoryblokApi();
  const commonSbParams: ISbStoriesParams = {
    version: CONTENT_VERSION,
    per_page: 1000,
    // @ts-ignore
    include_dates: "1",
  };

  const { data, total } = await storyblokApi.get("cdn/links", commonSbParams);
  const lastPageNumber = Math.ceil(total / 1000);

  let pages: { slug: string; is_folder: boolean; published_at: string }[] =
    Object.values(data.links);

  for (let i = 2; i <= lastPageNumber; i++) {
    const { data } = await storyblokApi.get("cdn/links", {
      ...commonSbParams,
      page: i,
    });

    pages = pages.concat(data.links);
  }

  const filteredPages = pages.filter((p) => !p.slug.startsWith("components"));

  return filteredPages;
}

export async function fetchStories(params?: ISbStoriesParams) {
  const storyblokApi = getStoryblokApi();
  const sbParams: ISbStoriesParams = {
    version: CONTENT_VERSION,
    ...params,
  };

  const start = performance.now();
  const { data, total } = await storyblokApi.get("cdn/stories", sbParams);
  const end = performance.now();
  console.log(`🕰️ fetchStories execute time: ${(end - start).toFixed(3)}ms`);

  return { ...data, total };
}

export async function fetchStoryMetadata(slug: string[]) {
  const { story } = await fetchStory(slug);

  if (!story) {
    console.log(`missing metadata for story: ${slug?.join("/")}`);
    return {};
  }

  const openGraph: Metadata["openGraph"] = {
    title: story.content.seoTitle || story.name || "",
    description: story.content.seoDescription || "",
    images: [
      {
        url: story.content?.ogImage?.filename
          ? `${story.content?.ogImage?.filename}/m/1200x630/filters:quality(75)`
          : "",
      },
    ],
  };

  const storyFullSlug = story.full_slug === "home" ? "" : story.full_slug;

  const canonical = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN as string}/${storyFullSlug}`,
  ).toString();

  return {
    alternates: {
      canonical,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN as string),
    title: story.content.seoTitle || story.name || "",
    description: story.content.seoDescription || "",
    openGraph,
    keywords: story.content?.seoKeywords || "",
    robots:
      story?.content?.robots === "index" ? { index: true } : { index: false },
  };
}
