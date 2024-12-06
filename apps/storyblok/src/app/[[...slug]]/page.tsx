import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";

import {
  // checkSSGPages,
  fetchAllPages,
  fetchStoryBySlug,
  getMetaData,
} from "@/lib/api";
import CoreLayout from "@/components/CoreLayout";

const isDraftModeEnv = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

type Props = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  return await getMetaData(params.slug);
}

export async function generateStaticParams() {
  if (isDraftModeEnv) return [];

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

  const { story, links } = await fetchStoryBySlug(isDraftModeEnv, params.slug, {
    resolve_relations: "header,footer",
  });
  // const timestamp = await checkSSGPages();
  // console.log({ timestamp });

  if (!story) {
    notFound();
  }

  return (
    <CoreLayout allResolvedLinks={links}>
      <StoryblokStory story={story} />
    </CoreLayout>
  ) as any;
}
