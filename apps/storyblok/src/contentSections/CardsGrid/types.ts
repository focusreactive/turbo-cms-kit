import type { DefaultCardStyle } from "@shared/ui/components/sections/cardsGrid/types";
import type { SbBlokData } from "@storyblok/react/rsc";

import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface IDefaultCard extends SbBlokData {
  title: string;
  description: string;
  image: IImage[];
  link: ILinkBlok[];
  style: DefaultCardStyle;
}

interface ICardsGrid extends ISectionContainer {
  items: IDefaultCard[];
  columns: string;
}

export interface ICardsGridProps {
  blok: ICardsGrid;
}
