import type { IGenericCarouselBaseProps } from "../../../ui/GenericCarousel/types";
import type { IImageProps } from "../../../ui/image/types";

export interface IWideCarouselCardProps {
  image: IImageProps;
}

export interface IWideSimpleCarouselProps extends IGenericCarouselBaseProps {
  slides: IWideCarouselCardProps[];
}
