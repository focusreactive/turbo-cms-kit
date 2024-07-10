import type { IImage } from "@/lib/prepareImageProps";
import type { IRichText } from "@/lib/renderRichText";
import type { SbBlokData } from "@storyblok/react/rsc";

interface IHero extends SbBlokData {
    text: IRichText[]
    image: IImage[]
}

export interface IHeroProps {
    blok: IHero;
}
