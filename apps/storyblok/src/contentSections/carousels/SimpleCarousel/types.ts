import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface ISimpleCarouselSlide {
  image: IImage[];
}

interface ISimpleCarousel extends ISectionContainer {
  slides: ISimpleCarouselSlide[];
}

export interface ISimpleCarouselProps {
  blok: ISimpleCarousel;
}
