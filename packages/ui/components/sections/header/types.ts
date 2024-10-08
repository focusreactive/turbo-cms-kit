import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export enum AlignVariant {
  Left = "left",
  Center = "center",
  Right = "right",
}

export interface IHeaderProps {
  links: LinkProps[];
  image: IImageProps;
  alignVariant: AlignVariant;
  className?: string;
}
