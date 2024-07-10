import { type Metadata } from "next";
import { StoryblokStory } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import { notFound } from "next/navigation";
import { fetchStoryBySlug, fetchAllPages, checkDraftModeToken } from "@/lib/api";

const isDraftModeEnv = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";
export const dynamic = isDraftModeEnv ? "force-dynamic" : "force-static";

type Props = {
  params: { slug?: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "StoryBlok / Next.js boilerplate",
    description:
      "A quick way to start a new project with StoryBlok and Next.js",
  };
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

const Home = async ({ params, searchParams }: Props) => {
  const isDraftModeEnabled = await checkDraftModeToken(searchParams);

  const [{ story }] = await Promise.all([
    fetchStoryBySlug(isDraftModeEnabled, params.slug),
  ]);

  if (!story) {
    notFound();
  }

  return (
    <StoryblokProvider>
      <StoryblokStory story={story} />
    </StoryblokProvider>
  );
};

export default Home;
