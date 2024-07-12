import type { SbBlokData } from "@storyblok/react/rsc";

import type { IRichTextBlok } from "@/lib/adapters/prepareRichTextProps";

interface ICopy5050 extends SbBlokData {
  columns: IRichTextBlok[];
  isReversedOnMobile: boolean;
}

export interface ICopy5050Props {
  blok: ICopy5050;
}
