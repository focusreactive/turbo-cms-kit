import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { WideSimpleCarousel as WideSimpleCarouselUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import SectionContainer from "@/components/SectionContainer";

import type { IWideSimpleCarouselProps } from "./types";

export default function WideSimpleCarousel({ data }: IWideSimpleCarouselProps) {
  if (!data) return null;

  const { slides } = data;

  if (!slides || slides.length === 0)
    return <EmptyBlock name="Wide Simple Carousel" />;

  const carouselSlides = slides.map((slide) => ({
    image: prepareImageProps(slide.image),
  }));

  return (
    <SectionContainer sectionData={data}>
      <WideSimpleCarouselUI slides={carouselSlides} />
    </SectionContainer>
  );
}
