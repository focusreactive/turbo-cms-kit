"use client";

import { getStoryblokApi } from "@/lib/storyblok";

import type { IStoryblokProviderProps } from "./types";

export default function StoryblokProvider({
  children,
}: IStoryblokProviderProps) {
  getStoryblokApi();

  return children;
}
