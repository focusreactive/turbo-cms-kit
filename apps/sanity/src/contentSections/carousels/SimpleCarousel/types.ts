import type { SectionSimpleCarousel } from "@/generated/extracted-types";

export interface ISimpleCarouselProps {
  data: SectionSimpleCarousel & {
    _key: string;
  };
}
