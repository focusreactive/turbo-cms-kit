import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";

import { fetchAllPages, fetchStory, fetchStoryMetadata } from "@/lib/storyblok";
import CoreLayout from "@/components/CoreLayout";

type Props = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  return await fetchStoryMetadata(params.slug ?? []);
}

export async function generateStaticParams() {
  if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_VERSION === "draft") {
    return [];
  }

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
  const { story, links } = await fetchStory(params.slug);

  if (!story) {
    notFound();
  }

  return (
    <CoreLayout allResolvedLinks={links}>
      <StoryblokStory story={story} />
    </CoreLayout>
  );
}
