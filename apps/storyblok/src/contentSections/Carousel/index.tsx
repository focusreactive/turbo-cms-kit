import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Carousel as CarouselUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICarouselProps } from "./types";

export default function Carousel({ blok }: ICarouselProps) {
  const { text, slides, effect, fullWidth, params } = blok;
  const { loop, slidesPerView, spaceBetween } = params?.[0] || {};

  if (!slides || slides.length === 0)
    return <EmptyBlock name={blok.component as string} />;

  const carouselSlides = slides.map((slide) => ({
    image: prepareImageProps(slide.image[0]),
    text: prepareRichTextProps(slide.text?.[0]),
    effect,
  }));
  const carouselParams = {
    loop,
    slidesPerView: slidesPerView
      ? parseInt(slidesPerView)
      : effect === "cards"
        ? 1
        : 3,
    spaceBetween: spaceBetween ? parseInt(spaceBetween) : 20,
  };

  return (
    <SectionContainer
      blok={{
        ...blok,
        paddingX: "none",
        noMaxWidth: fullWidth,
      }}
    >
      <CarouselUI
        text={prepareRichTextProps(text?.[0])}
        slides={carouselSlides}
        effect={effect}
        params={carouselParams}
      />
    </SectionContainer>
  );
}
