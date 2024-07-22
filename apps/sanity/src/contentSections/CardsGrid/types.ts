import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILink } from "@/lib/adapters/prepareLinkProps";
import type { IRichText } from "@/lib/adapters/prepareRichTextProps";

export interface ICardsGrid {
  _key: string;
  columns: number;
  items: {
    _type: "cardsGrid";
    style?: string;
    title: string;
    description: string;
    image?: IImage;
    link?: ILink;
    links?: ILink[];
    icon?: IImage;
    text?: IRichText;
  }[];
  theme?: "light" | "dark";
}

export interface ICardsGridSectionProps {
  data: ICardsGrid;
}
