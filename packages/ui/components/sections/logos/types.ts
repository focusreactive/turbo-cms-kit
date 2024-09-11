import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export enum AlignVariant {
  Left = "left",
  Center = "center",
  Right = "right",
}

export interface ILogoItem {
  link?: LinkProps;
  image: IImageProps;
}

export interface ILogosProps {
  items: ILogoItem[];
  alignVariant: AlignVariant;
}
