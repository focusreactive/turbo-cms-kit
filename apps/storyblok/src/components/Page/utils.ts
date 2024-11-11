import type { ISbStoryData } from "@storyblok/react/rsc";

export function getHeaderAndFooterStories(
  stories: ISbStoryData[],
  header: string | ISbStoryData,
  footer: string | ISbStoryData,
) {
  let resolvedHeader: ISbStoryData | undefined;
  let resolvedFooter: ISbStoryData | undefined;

  if (typeof header === "string") {
    resolvedHeader = stories.find((s) => s.uuid === header);
  } else {
    resolvedHeader = header;
  }

  if (typeof footer === "string") {
    resolvedFooter = stories.find((s) => s.uuid === footer);
  } else {
    resolvedFooter = footer;
  }

  return {
    header: resolvedHeader,
    footer: resolvedFooter,
  };
}
