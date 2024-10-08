import { Image } from "../../../ui/image";
import { ImageAspectRatio } from "../../../ui/image/types";
import type { ICarouselCardProps } from "./types";

export default function CarouselCard({ image }: ICarouselCardProps) {
  const imageWrapperProps = {
    className: "h-40",
    style: {
      aspectRatio: ImageAspectRatio[image.aspectRatio as ImageAspectRatio],
    },
  };

  return (
    <div className="flex flex-col gap-4 border-4 border-pink-500">
      <p>simple carousel card</p>
      <div {...imageWrapperProps}>
        <Image {...image} fit="contain" />
      </div>
    </div>
  );
}
