import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export enum LogosVariant {
  Left = "left",
  Centered = "centered",
  Right = "right",
}

export interface ILogoItem {
  link?: LinkProps;
  image: IImageProps;
  _key: string;
}

export interface ILogosProps {
  items: ILogoItem[];
  variant?: LogosVariant;
}
