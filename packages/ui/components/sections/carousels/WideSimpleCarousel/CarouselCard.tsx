import { Image } from "../../../ui/image";
import { ImageAspectRatio } from "../../../ui/image/types";
import type { IWideCarouselCardProps } from "./types";

export default function WideCarouselCard({ image }: IWideCarouselCardProps) {
  const imageWrapperProps = {
    className: "h-40",
    style: {
      aspectRatio: ImageAspectRatio[image.aspectRatio as ImageAspectRatio],
    },
  };

  return (
    <div className="flex flex-col gap-4 border-4 border-blue-500">
      <p>WIDE simple carousel card</p>
      <div {...imageWrapperProps}>
        <Image {...image} fit="contain" />
      </div>
    </div>
  );
}
