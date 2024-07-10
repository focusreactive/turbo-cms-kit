import { HeroSection } from "@shared/ui";
import type React from "react";
import { type IHeroProps } from "./types";
import SectionContainer from "@/components/SectionContainer";
import { prepareImageProps } from "@/lib/prepareImageProps";
import { prepareRichTextProps } from "@/lib/prepareRichTextProps";

const Hero: React.FunctionComponent<IHeroProps> = ({ blok }) => {
    return <SectionContainer blok={blok}><HeroSection richText={prepareRichTextProps(blok.text[0])} image={prepareImageProps(blok.image[0])} /></SectionContainer>;
};

export default Hero;
