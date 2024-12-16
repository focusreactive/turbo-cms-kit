import { StoryblokComponent, StoryblokStory } from "@storyblok/react/rsc";

import { cn, CookieBanner } from "@shared/ui";

import { useGlobalComponent } from "@/lib/hooks/useGlobalComponent";

import type { IPageContainerProps } from "./types";

export default function PageContainer({ blok }: IPageContainerProps) {
  const globalHeader = useGlobalComponent(blok.header as string);
  const globalFooter = useGlobalComponent(blok.footer as string);

  const { sections, showCookieBanner, theme } = blok;

  if (!sections) return null;

  return (
    <div className={cn("bg-bgColor", theme)}>
      {globalHeader && <StoryblokStory story={globalHeader} />}
      {sections.map((s) => (
        <StoryblokComponent blok={s} key={s._uid} />
      ))}
      {globalFooter && <StoryblokStory story={globalFooter} />}
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
