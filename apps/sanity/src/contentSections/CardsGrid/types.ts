import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILink } from "@/lib/adapters/prepareLinkProps";

export interface ICardsGrid {
  _key: string;
  columns: number;
  items: {
    style?: string;
    title: string;
    description: string;
    links: ILink[];
    icon: IImage;
  }[];
}

export interface ICardsGridSectionProps {
  data: ICardsGrid;
}
