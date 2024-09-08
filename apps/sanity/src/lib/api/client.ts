import { createClient } from "next-sanity";

import config from "@/config";

export const client = createClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  apiVersion: config.sanity.apiVersion,
  // TODO: check this
  // If webhook revalidation is setup we want the freshest content, if not then it's best to use the speedy CDN
  // useCdn: revalidateSecret ? false : true,
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
  stega: {
    studioUrl: config.sanity.studioUrl,
    // logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === "title") {
        return true;
      }

      return props.filterDefault(props);
    },
  },
});
