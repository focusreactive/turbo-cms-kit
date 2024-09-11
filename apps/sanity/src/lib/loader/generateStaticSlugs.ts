import "server-only";

import { groq } from "next-sanity";

import config from "@/config";
import { client } from "@/lib/api/client";

// Used in `generateStaticParams`
export async function generateStaticSlugs(type: string) {
  // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
  const slugs = await client
    .withConfig({
      token: config.sanity.token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch<string[]>(
      groq`*[_type == $type && defined(pathname.current)]{"slug": pathname.current}.slug`,
      { type },
      {
        next: {
          tags: [type], // TODO: should it be the same as in loadPage?
        },
      },
    );

  return slugs.map((slug) => ({ slug: slug.split("/").filter(Boolean) }));
}
