import type { SbBlokData } from "@storyblok/react/rsc";

import type { IRichTextBlok } from "@/lib/adapters/prepareRichTextProps";

interface ICopy extends SbBlokData {
  text: IRichTextBlok[];
}

export interface ICopyProps {
  blok: ICopy;
}
