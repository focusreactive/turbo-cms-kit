import type { Page } from "@/generated/extracted-schema-types";
import createImageUrlBuilder from "@sanity/image-url";

import config from "../config";

const imageBuilder = createImageUrlBuilder({
  projectId: config.sanity.projectId || "",
  dataset: config.sanity.dataset || "",
});

export const urlForImage = (source: Page["ogImage"]) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format").fit("max");
};

export function urlForOpenGraphImage(image: Page["ogImage"]) {
  return urlForImage(image)?.width(1200).height(627).fit("crop").url();
}

export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case "page": {
      if (!slug) return undefined;
      if (slug === "/") return "/";
      return slug ? `/${slug}` : undefined;
    }

    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
