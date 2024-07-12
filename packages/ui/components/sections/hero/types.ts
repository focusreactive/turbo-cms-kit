import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";
import type { IRichTextProps } from "../../ui/richText/types";

export interface IHeroSectionProps {
  richText: IRichTextProps;
  image: IImageProps;
  links: LinkProps[];
}
