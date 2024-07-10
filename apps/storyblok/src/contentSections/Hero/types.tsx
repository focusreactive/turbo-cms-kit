import type { IImage } from "@/lib/prepareImageProps";
import type { IRichTextBlok } from "@/lib/prepareRichTextProps";
import type { SbBlokData } from "@storyblok/react/rsc";

interface IHero extends SbBlokData {
    text: IRichTextBlok[]
    image: IImage[]
}

export interface IHeroProps {
    blok: IHero;
}
