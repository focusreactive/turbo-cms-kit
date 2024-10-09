import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";
import type { IRichTextProps } from "../../ui/richText/types";

export interface IFooterProps {
  links: LinkProps[];
  image: IImageProps;
  text: IRichTextProps;
  copywriteText?: string;
}
