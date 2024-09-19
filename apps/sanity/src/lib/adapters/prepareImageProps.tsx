import type { CustomImage } from "@/generated/extracted-schema-types";
import { stegaClean } from "@sanity/client/stega";
import imageUrlBuilder from "@sanity/image-url";
import {
  ImageAspectRatio,
  type IImageProps,
} from "@shared/ui/components/ui/image/types";

import { client } from "@/lib/api/client";

const builder = imageUrlBuilder(client);

export const urlForImage = (source: CustomImage["image"]) => {
  if (!source?.asset?._ref) {
    return undefined;
  }

  return builder.image(source).auto("format").fit("max");
};

export const prepareImageProps = (props?: CustomImage): IImageProps => {
  if (!props?.image)
    return {
      src: "",
      alt: "",
      aspectRatio: ImageAspectRatio["1/1"],
      fill: true,
      fit: "cover",
    };

  const url =
    urlForImage(props.image)
      ?.height(props.height as any) // should make height required?
      .fit("crop")
      .url() || "";

  return {
    src: url,
    alt: props.image.alt || "",
    aspectRatio: stegaClean(props.aspectRatio) as ImageAspectRatio,
    fill: true,
    fit: "cover",
    sizes: "(max-width: 1280px) 100vw, 1280px",
  };
};
