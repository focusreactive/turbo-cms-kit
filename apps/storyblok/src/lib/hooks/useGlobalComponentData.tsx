"use client";

import type { ISbStoryData, SbBlokData } from "@storyblok/react/rsc";

import { useDataContext } from "@/components/DataContext";

export const useGlobalComponentData = (
  globalComponent: string | SbBlokData,
): ISbStoryData | null => {
  const { globalComponentsStories } = useDataContext();

  console.log("globalComponentsStories");
  console.log(globalComponentsStories);

  if (!globalComponent) return null;

  const globalComponentData = globalComponentsStories.find(
    (s) => s.uuid === globalComponent,
  );

  return globalComponentData || null;
};
