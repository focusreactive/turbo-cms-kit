import { HeroSection } from "@shared/ui";
import type React from "react";
import { type IHeroProps } from "./types";
import SectionContainer from "@/components/SectionContainer";
import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";

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
