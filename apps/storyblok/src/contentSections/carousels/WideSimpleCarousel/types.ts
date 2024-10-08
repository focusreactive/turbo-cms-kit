import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface IWideSimpleCarouselSlide {
  image: IImage[];
}

interface IWideSimpleCarousel extends ISectionContainer {
  slides: IWideSimpleCarouselSlide[];
}

export interface IWideSimpleCarouselProps {
  blok: IWideSimpleCarousel;
}
