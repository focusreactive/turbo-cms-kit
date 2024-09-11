import type { LinkProps } from "../../ui/link/types";

export enum AlignVariant {
  Left = "left",
  Center = "center",
  Right = "right",
}

export interface ILinksListProps {
  links: LinkProps[];
  alignVariant: AlignVariant;
}
