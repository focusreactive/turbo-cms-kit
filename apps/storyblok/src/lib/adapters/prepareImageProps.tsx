import {
  ImageAspectRatio,
  type IImageProps,
} from "@shared/ui/components/ui/image/types";
import type { SbBlokData } from "@storyblok/react/rsc";

interface IStoryblokImage {
  alt: string;
  filename: string;
}

export interface IImage extends SbBlokData {
  asset: IStoryblokImage;
  aspectRatio: ImageAspectRatio;
}

export const prepareImageProps = (props?: IImage): IImageProps => {
  if (!props) {
    return {
      src: "",
      alt: "",
      aspectRatio: ImageAspectRatio["16/9"],
      fill: true,
      fit: "cover",
    };
  }

  return {
    src: props.asset.filename,
    alt: props.asset.alt,
    aspectRatio: props.aspectRatio,
    fill: true,
    fit: "cover",
  };
};
