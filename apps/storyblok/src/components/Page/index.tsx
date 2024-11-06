import { StoryblokComponent, StoryblokStory } from "@storyblok/react/rsc";

import { cn, CookieBanner } from "@shared/ui";

import type { IPageContainerProps } from "./types";

export default function PageContainer({ blok }: IPageContainerProps) {
  const { sections, showCookieBanner, theme } = blok;

  if (!sections) return null;

  return (
    <div className={cn("bg-bgColor", theme)}>
      <StoryblokStory story={blok.header} />
      {sections.map((s) => (
        <StoryblokComponent blok={s} key={s._uid} />
      ))}
      <StoryblokStory story={blok.footer} />
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
