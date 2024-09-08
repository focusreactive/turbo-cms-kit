import "server-only";

import { groq } from "next-sanity";

import config from "@/config";
import { client } from "@/lib/api/client";

// Used in `generateStaticParams`
export function generateStaticSlugs(type: string) {
  // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
  return client
    .withConfig({
      token: config.sanity.token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch<{ slug: string }[]>(
      groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
      { type },
      {
        next: {
          tags: [type],
        },
      },
    );
}
