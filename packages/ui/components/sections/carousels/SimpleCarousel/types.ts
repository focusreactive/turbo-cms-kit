import type { IGenericCarouselBaseProps } from "../../../ui/GenericCarousel/types";
import type { IImageProps } from "../../../ui/image/types";

export interface ISimpleCarouselProps extends IGenericCarouselBaseProps {
  slides: ICarouselCardProps[];
}

export interface ICarouselCardProps {
  image: IImageProps;
}
