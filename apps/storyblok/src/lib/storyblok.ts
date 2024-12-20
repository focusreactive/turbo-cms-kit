import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { COMPONENTS } from "@/constants/sbComponents";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.SB_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: COMPONENTS,
});
