import type { ISbStoryData } from "@storyblok/react/rsc";

import { fetchStoriesByParams, isDraftModeEnv } from "@/lib/api";
import { DataContextProvider } from "@/components/DataContext";

import type { ICoreLayoutProps } from "./types";

export default async function CoreLayout({
  children,
  allResolvedLinks,
}: ICoreLayoutProps) {
  let globalComponentsStories: ISbStoryData[] = [];

  if (isDraftModeEnv) {
    const { data } = await fetchStoriesByParams(isDraftModeEnv, {
      by_slugs: "components/*",
    });

    globalComponentsStories = data;
  }

  return (
    <DataContextProvider
      globalComponentsStories={globalComponentsStories}
      allResolvedLinks={allResolvedLinks}
    >
      {children}
    </DataContextProvider>
  );
}
