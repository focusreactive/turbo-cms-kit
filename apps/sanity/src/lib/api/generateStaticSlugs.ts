import "server-only";

import config from "config";
import { groq } from "next-sanity";

import { client } from "@/lib/sanity/client";

// Used in `generateStaticParams`
export function generateStaticPaths(types: string[]) {
  return client
    .withConfig({
      token: config.sanity.token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch<string[]>(
      groq`*[_type in $types && defined(pathname.current)][].pathname.current`,
      { types },
      {
        next: {
          tags: types,
        },
      },
    );
}
