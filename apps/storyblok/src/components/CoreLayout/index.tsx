import type { ISbStoryData } from "@storyblok/react/rsc";

import { fetchStoriesByParams, isDraftModeEnv } from "@/lib/api";
import { DataContextProvider } from "@/components/DataContext";
import StoryblokProvider from "@/components/StoryblokProvider";

import type { ICoreLayoutProps } from "./types";

export default async function CoreLayout({
  children,
  allResolvedLinks,
}: ICoreLayoutProps) {
  let headersAndFooters: ISbStoryData[] = [];

  if (isDraftModeEnv) {
    const { data } = await fetchStoriesByParams(isDraftModeEnv, {
      by_slugs: "headers/*,footers/*",
    });

    headersAndFooters = data;
  }

  return (
    <StoryblokProvider>
      <DataContextProvider
        headersAndFooters={headersAndFooters}
        allResolvedLinks={allResolvedLinks}
      >
        {children}
      </DataContextProvider>
    </StoryblokProvider>
  );
}
