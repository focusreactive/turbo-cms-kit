import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";
import type { IRichTextProps } from "../../ui/richText/types";

export interface IHeroProps {
  title: string;
  text: IRichTextProps;
  image: IImageProps;
  links: LinkProps[];
}
