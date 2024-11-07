import { stegaClean } from "@sanity/client/stega";
import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Carousel as CarouselUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICarouselProps } from "./types";

export default function Carousel({ data }: ICarouselProps) {
  if (!data) return null;

  const { text, slides, params } = data;
  const effect = stegaClean(data.effect);
  const { loop, slidesPerView, spaceBetween } = params || {};

  if (!slides || slides.length === 0)
    return <EmptyBlock name="Carousel" />;

  const carouselSlides = slides.map((slide) => ({
    image: prepareImageProps(slide.image),
    text: prepareRichTextProps(slide.text),
    effect,
  }));

  return (
    <SectionContainer
      sectionData={{
        ...data,
        paddingX: "none",
      }}
    >
      <CarouselUI
        text={prepareRichTextProps(text)}
        slides={carouselSlides}
        effect={effect}
        params={{
          loop,
          slidesPerView: slidesPerView || (effect === "cards" ? 1 : 3),
          spaceBetween: spaceBetween || 20,
        }}
      />
    </SectionContainer>
  );
}
