import type { ISbRichtext, SbBlokData } from "@storyblok/react/rsc";

interface ICopy extends SbBlokData {
    richText: ISbRichtext;
}

export interface ICopyProps {
    blok: ICopy;
}
