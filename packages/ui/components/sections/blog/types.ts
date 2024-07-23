import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";
import type { IRichTextProps } from "../../ui/richText/types";

export interface IBlogPostCardProps {
  text: IRichTextProps;
  image: IImageProps;
  link: LinkProps;
}

export interface IBlogSectionProps {
  text: IRichTextProps;
  posts: IBlogPostCardProps[];
  style: string;
}
