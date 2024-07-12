"use client";

import type React from "react";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { COMPONENTS } from "@/constants/sbComponents";

import { type IStoryblokProviderProps } from "./types";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components: COMPONENTS,
  apiOptions: {
    region: process.env.NEXT_PUBLIC_SB_REGION,
  },
});

const StoryblokProvider: React.FunctionComponent<IStoryblokProviderProps> = ({
  children,
}) => {
  return children;
};

export default StoryblokProvider;
