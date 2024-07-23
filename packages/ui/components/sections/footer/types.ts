import type { LinkProps } from "../../ui/link/types";
import type { IRichTextProps } from "../../ui/richText/types";

export interface IFooterProps {
  links: LinkProps[];
  text: IRichTextProps;
  copywriteText?: string;
}
