import { StoryblokComponent } from "@storyblok/react/rsc";

import type { IPageContainerProps } from "./types";

export default function PageContainer({ blok }: IPageContainerProps) {
  const { sections } = blok;

  if (!sections) return null;

  return (
    <div className="mt-4">
      {sections.map((section) => (
        <StoryblokComponent blok={{ ...section }} key={section._uid} />
      ))}
    </div>
  );
}
