import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export interface IDefaultCard {
  type: "defaultCard";
  title: string;
  description: string;
  style?: string;
  image?: IImageProps;
  link?: LinkProps;
}

export interface ICardsGridProps {
  items: IDefaultCard[];
  columns: number;
}
