import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { SimpleCarousel as SimpleCarouselUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ISimpleCarouselProps } from "./types";

export default function SimpleCarousel({ blok }: ISimpleCarouselProps) {
  const { text, slides, effect, fullWidth, params } = blok;
  const { loop, slidesPerView, spaceBetween } = params?.[0] || {};

  if (!slides || slides.length === 0)
    return <EmptyBlock name="Simple Carousel" />;

  const carouselSlides = slides.map((slide) => ({
    image: prepareImageProps(slide.image[0]),
    text: prepareRichTextProps(slide.text?.[0]),
    effect,
  }));

  return (
    <SectionContainer
      blok={{
        ...blok,
        paddingX: "none",
        noMaxWidth: fullWidth,
      }}
    >
      <SimpleCarouselUI
        text={prepareRichTextProps(text?.[0])}
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
