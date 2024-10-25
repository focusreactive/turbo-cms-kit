import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { SimpleCarousel as SimpleCarouselUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import SectionContainer from "@/components/SectionContainer";

import type { ISimpleCarouselProps } from "./types";

export default function SimpleCarousel({ data }: ISimpleCarouselProps) {
  if (!data) return null;

  const { slides } = data;

  if (!slides || slides.length === 0)
    return <EmptyBlock name="Simple Carousel" />;

  const carouselSlides = slides.map((slide) => ({
    image: prepareImageProps(slide.image),
  }));

  return (
    <SectionContainer sectionData={data} className="overflow-x-hidden">
      <SimpleCarouselUI slides={carouselSlides} />
    </SectionContainer>
  );
}
