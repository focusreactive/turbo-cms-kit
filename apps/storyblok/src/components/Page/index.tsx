import { StoryblokComponent } from "@storyblok/react/rsc";

import { CookieBanner } from "@shared/ui";

import type { IPageContainerProps } from "./types";

export default function PageContainer({ blok }: IPageContainerProps) {
  const { sections, showCookieBanner } = blok;

  if (!sections) return null;

  return (
    <div>
      {sections.map((s) => (
        <StoryblokComponent blok={s} key={s._uid} />
      ))}
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
