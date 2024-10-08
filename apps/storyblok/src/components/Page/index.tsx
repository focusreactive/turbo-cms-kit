import { StoryblokComponent } from "@storyblok/react/rsc";

import { CookieBanner } from "@shared/ui";

import type { IPageContainerProps } from "./types";

export default function PageContainer({ blok }: IPageContainerProps) {
  const { sections, showCookieBanner } = blok;

  if (!sections) return null;

  return (
    <div>
      {sections.map((section) => (
        <StoryblokComponent blok={{ ...section }} key={section._uid} />
      ))}
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
