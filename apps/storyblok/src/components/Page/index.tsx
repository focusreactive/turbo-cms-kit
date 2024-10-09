import { StoryblokComponent, StoryblokStory } from "@storyblok/react/rsc";

import { CookieBanner } from "@shared/ui";

import type { IPageContainerProps } from "./types";

export default function PageContainer({ blok }: IPageContainerProps) {
  const { sections, showCookieBanner } = blok;

  if (!sections) return null;

  return (
    <div>
      <StoryblokStory story={blok.header} />
      {sections.map((s) => (
        <StoryblokComponent blok={s} key={s._uid} />
      ))}
      <StoryblokStory story={blok.footer} />
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
