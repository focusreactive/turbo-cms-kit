import imageUrlBuilder from "@sanity/image-url"
import type {
  IImageProps,
  ImageAspectRatio,
} from "@shared/ui/components/ui/image/types";
import { client } from "@/lib/sanity/client";

interface ISanityImage {
  type: string;
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface IImage {
  image: ISanityImage;
  aspectRatio: ImageAspectRatio;
}

const builder = imageUrlBuilder(client)

export const urlForImage = (source: ISanityImage | undefined) => {
  if (!source?.asset?._ref) {
    return undefined
  }

  return builder.image(source).auto('format').fit('max')
}

export const prepareImageProps = (props: IImage): IImageProps => {
  const url = urlForImage(props.image)?.height(600).fit('crop').url() || ''


  console.log('props.aspectRatio');
  console.log(props.aspectRatio);
  
  return {
    src: url,
    alt: props.image.alt,
    aspectRatio: props.aspectRatio,
    fill: true,
    fit: "cover",
  };
};
