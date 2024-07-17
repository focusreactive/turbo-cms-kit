import type React from "react";

import { HeroSection } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import { type IHeroProps } from "./types";

export default function Hero({ blok }: IHeroProps) {
  const { text, image, links } = blok;

  return (
    <SectionContainer blok={blok}>
      <HeroSection
        richText={prepareRichTextProps(text[0])}
        image={prepareImageProps(image[0])}
        links={links.map(prepareLinkProps)}
      />
    </SectionContainer>
  );
}
