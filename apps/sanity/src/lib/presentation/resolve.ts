/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import { defineLocations } from "sanity/presentation";

export const locations = {
  page: defineLocations({
    select: { title: "title", slug: "pathname.current" },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || "Untitled",
          href: doc?.slug,
        },
      ],
    }),
  }),
};
