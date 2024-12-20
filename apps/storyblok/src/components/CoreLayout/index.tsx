import type { ISbStoryData } from "@storyblok/react/rsc";

import { fetchStories } from "@/lib/storyblok";
import { DataContextProvider } from "@/components/DataContext";

import type { ICoreLayoutProps } from "./types";

export default async function CoreLayout({
  children,
  allResolvedLinks,
}: ICoreLayoutProps) {
  let globalComponentsStories: ISbStoryData[] = [];
  const { stories } = await fetchStories({
    by_slugs: "components/*",
  });

  globalComponentsStories = stories;

  return (
    <DataContextProvider
      globalComponentsStories={globalComponentsStories}
      allResolvedLinks={allResolvedLinks}
    >
      {children}
    </DataContextProvider>
  );
}
