"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import React from "react";
import { IStoryblokProviderProps } from "./types";
import { COMPONENTS } from "@/constants/sbComponents";

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
