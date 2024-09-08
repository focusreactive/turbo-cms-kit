import "server-only";

import { groq } from "next-sanity";

import { client } from "@/lib/api/client";

import config from "../../config";

export function generateSitemap(type: string) {
  // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
  return client
    .withConfig({
      token: config.sanity.token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch<{ slug: string; _createdAt: string }[]>(
      groq`*[_type == $type && defined(slug.current)]{"slug": slug.current, _createdAt}`,
      { type },
      {
        next: {
          tags: [type],
        },
      },
    );
}
