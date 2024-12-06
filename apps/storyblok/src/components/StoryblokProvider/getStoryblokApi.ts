import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { COMPONENTS } from "@/constants/sbComponents";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components: COMPONENTS,
  apiOptions: {
    region: process.env.NEXT_PUBLIC_SB_REGION,
  },
});
