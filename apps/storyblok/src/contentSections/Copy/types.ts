import type { IRichText } from "@/lib/renderRichText";
import type { SbBlokData } from "@storyblok/react/rsc";

interface ICopy extends SbBlokData {
    text: IRichText[]
}

export interface ICopyProps {
    blok: ICopy;
}
