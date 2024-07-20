import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export interface ICardGridItem {
  title: string;
  description: string;
  style?: string;
  icon?: IImageProps;
  link?: LinkProps;
}

export interface ICardsGridProps {
  items: ICardGridItem[];
  columns: number;
}
