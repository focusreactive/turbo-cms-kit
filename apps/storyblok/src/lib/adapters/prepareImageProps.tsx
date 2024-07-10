import type { IImageProps } from "@shared/ui/components/ui/image/types";
import type { SbBlokData } from "@storyblok/react/rsc";

export enum ImageAspectRatio {
    "16/9" = "16/9",
    "3/2" = "3/2",
    "4/3" = "4/3",
    "1/1" = "1/1",
    "9/16" = "9/16",
    "1/2" = "1/2",
    "4/1" = "4/1",
    "3/1" = "3/1",
    "61/29" = "61/29",
}

interface IStoryblokImage {
    alt: string;
    filename: string;
}

export interface IImage extends SbBlokData {
    asset: IStoryblokImage;
    aspectRatio: ImageAspectRatio;
}

export const prepareImageProps = (props: IImage): IImageProps => {
    return {
        src: props.asset.filename,
        alt: props.asset.alt,
        aspectRatio: props.aspectRatio,
        fill: true,
        fit: 'cover'
    };
}