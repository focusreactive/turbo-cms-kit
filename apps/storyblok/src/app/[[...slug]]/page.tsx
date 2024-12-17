import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";

import {
  checkDraftModeToken,
  fetchAllPages,
  fetchStoryBySlug,
  getMetaData,
} from "@/lib/api";
import { isPreview } from "@/lib/utils";
import CoreLayout from "@/components/CoreLayout";

export const fetchCache = "default-cache";

type Props = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  return await getMetaData(params.slug);
}

export async function generateStaticParams() {
  if (isPreview) return [];

  const pages = await fetchAllPages();

  const paths = pages
    .filter((page) => page.is_folder === false)
    .map((page) => {
      return {
        slug: page.slug.split("/"),
      };
    });

  return paths;
}

export default async function Home(props: Props) {
  const params = await props.params;
  let isDraftModeEnabled = false;

  if (isPreview) {
    const searchParams = await props.searchParams;
    isDraftModeEnabled = await checkDraftModeToken(searchParams);
  }

  const { story, links } = await fetchStoryBySlug(
    isDraftModeEnabled,
    params.slug,
    {
      resolve_relations: "header,footer",
    },
  );

  if (!story) {
    notFound();
  }

  return (
    <CoreLayout allResolvedLinks={links}>
      <StoryblokStory story={story} />
    </CoreLayout>
  );
}
