/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import { defineLocations } from "sanity/presentation";

import { resolveHref } from "@/lib/utils";

export const locations = {
  page: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || "Untitled",
          href: resolveHref("page", doc?.slug)!,
        },
      ],
    }),
  }),
};
