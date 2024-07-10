import { HeroSection } from "@shared/ui";
import type React from "react";
import { type IHeroProps } from "./types";
import SectionContainer from "@/components/SectionContainer";

const Hero: React.FunctionComponent<IHeroProps> = ({ blok }) => {
    return <SectionContainer blok={blok}><HeroSection richText={blok.text[0]} image={blok.image[0]} /></SectionContainer>;
};

export default Hero;
