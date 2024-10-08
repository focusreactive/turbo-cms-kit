import { GenericCarousel } from "../../../ui/GenericCarousel";
import CarouselCard from "./CarouselCard";
import type { ISimpleCarouselProps } from "./types";

export function SimpleCarousel({
  slides,
  customModules,
  customModulesParams,
}: ISimpleCarouselProps) {
  return (
    <GenericCarousel
      slides={slides.map((slide) => ({
        children: <CarouselCard {...slide} />,
        className: "!w-96",
      }))}
      customModules={customModules}
      customModulesParams={customModulesParams}
    />
  );
}
