"use client";

import { getStoryblokApi } from "./getStoryblokApi";
import type { IStoryblokProviderProps } from "./types";

export default function StoryblokProvider({
  children,
}: IStoryblokProviderProps) {
  // Re-initialize on the client
  getStoryblokApi();

  return children;
}
