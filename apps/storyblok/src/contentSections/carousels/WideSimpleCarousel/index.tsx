import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { WideSimpleCarousel as WideSimpleCarouselUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import SectionContainer from "@/components/SectionContainer";

import type { IWideSimpleCarouselProps } from "./types";

export default function WideSimpleCarousel({ blok }: IWideSimpleCarouselProps) {
  const { slides } = blok;

  if (!slides || slides.length === 0)
    return <EmptyBlock name="Wide Simple Carousel" />;

  const carouselSlides = slides.map((slide) => ({
    image: prepareImageProps(slide.image[0]),
  }));

  return (
    <SectionContainer blok={blok} className="overflow-x-hidden">
      <WideSimpleCarouselUI slides={carouselSlides} />
    </SectionContainer>
  );
}
