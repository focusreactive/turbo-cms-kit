"use client";

import type { ISbStoryData } from "@storyblok/react/rsc";

import { useDataContext } from "@/components/DataContext";

export const useGlobalComponentData = (
  globalComponent: string,
): ISbStoryData | null => {
  const { globalComponentsStories } = useDataContext();

  if (!globalComponent) return null;

  const globalComponentData = globalComponentsStories.find(
    (s) => s.uuid === globalComponent,
  );

  return globalComponentData || null;
};
