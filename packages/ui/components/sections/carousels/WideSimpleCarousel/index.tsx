import { GenericCarousel } from "../../../ui/GenericCarousel";
import CarouselCard from "./CarouselCard";
import type { IWideSimpleCarouselProps } from "./types";

export function WideSimpleCarousel({
  slides,
  customModules,
  customModulesParams,
}: IWideSimpleCarouselProps) {
  return (
    <GenericCarousel
      slides={slides.map((slide) => ({
        children: <CarouselCard {...slide} />,
        className: "!w-full",
      }))}
      customModules={customModules}
      customModulesParams={customModulesParams}
    />
  );
}
