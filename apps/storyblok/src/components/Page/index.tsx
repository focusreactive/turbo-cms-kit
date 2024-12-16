import { StoryblokComponent, StoryblokStory } from "@storyblok/react/rsc";

import { cn, CookieBanner } from "@shared/ui";

import { useDataContext } from "../DataContext";
import type { IPageContainerProps } from "./types";
import { getHeaderAndFooterStories } from "./utils";

export default function PageContainer({ blok }: IPageContainerProps) {
  const { globalComponentsStories } = useDataContext();

  const { sections, showCookieBanner, theme } = blok;

  if (!sections) return null;

  const { header, footer } = getHeaderAndFooterStories(
    globalComponentsStories,
    blok.header,
    blok.footer,
  );

  return (
    <div className={cn("bg-bgColor", theme)}>
      <StoryblokStory story={header} />
      {sections.map((s) => (
        <StoryblokComponent blok={s} key={s._uid} />
      ))}
      <StoryblokStory story={footer} />
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
