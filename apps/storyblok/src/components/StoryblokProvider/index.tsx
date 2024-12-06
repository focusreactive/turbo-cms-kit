"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { COMPONENTS } from "@/constants/sbComponents";

import type { IStoryblokProviderProps } from "./types";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components: COMPONENTS,
  apiOptions: {
    region: process.env.NEXT_PUBLIC_SB_REGION,
  },
});

export default function StoryblokProvider({
  children,
}: IStoryblokProviderProps) {
  return children;
}
