import type { IRichTextBlok } from "@/lib/adapters/prepareRichTextProps";
import type { SbBlokData } from "@storyblok/react/rsc";

interface ICopy extends SbBlokData {
    text: IRichTextBlok[]
}

export interface ICopyProps {
    blok: ICopy;
}
