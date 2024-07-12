import type { LinkProps } from "../../ui/link/types";
import type { IRichTextProps } from "../../ui/richText/types";

export enum CtaVariant {
  Default = "default",
  Centered = "centered",
}

export interface ICtaSectionProps {
  richText: IRichTextProps;
  links: LinkProps[];
  variant?: CtaVariant;
}
