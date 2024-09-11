import type { IRichText } from "@/lib/adapters/prepareRichTextProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface ICopy extends ISectionContainer {
  columns: IRichText[];
  isReversedOnMobile: boolean;
}

export interface ICopyProps {
  blok: ICopy;
}
