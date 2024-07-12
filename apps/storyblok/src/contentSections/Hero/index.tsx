import type React from "react";

import { HeroSection } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import { type IHeroProps } from "./types";

const Hero: React.FunctionComponent<IHeroProps> = ({ blok }) => {
  return (
    <SectionContainer blok={blok}>
      <HeroSection
        richText={prepareRichTextProps(blok.text[0])}
        image={prepareImageProps(blok.image[0])}
        links={blok.links.map((link) => prepareLinkProps(link))}
      />
    </SectionContainer>
  );
};

export default Hero;
