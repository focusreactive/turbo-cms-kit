import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";
import type { IRichTextProps } from "../../ui/richText/types";

export interface IClickableImageCard {
  type: "clickableImageCard";
  image: IImageProps;
  link?: LinkProps;
  text: IRichTextProps;
}

export interface IDefaultCard {
  type: "defaultCard";
  title: string;
  description: string;
  style?: string;
  image?: IImageProps;
  link?: LinkProps;
}

export interface ICardsGridProps {
  items: (IDefaultCard | IClickableImageCard)[];
  columns: number;
}
