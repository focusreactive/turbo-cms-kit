import { HeroSection } from "@shared/ui";
import type React from "react";
import { type IHeroProps } from "./types";
import SectionContainer from "@/components/SectionContainer";
import { prepareImageProps } from "@/lib/prepareImageProps";
import renderRichText from "@/lib/renderRichText";

const Hero: React.FunctionComponent<IHeroProps> = ({ blok }) => {
    return <SectionContainer blok={blok}><HeroSection richText={renderRichText(blok.text[0])} image={prepareImageProps(blok.image[0])} /></SectionContainer>;
};

export default Hero;
