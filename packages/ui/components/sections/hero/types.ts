import type { IRichTextProps } from "../../ui/richText/types";
import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export interface IHeroSectionProps {
    richText: IRichTextProps;
    image: IImageProps;
    links: LinkProps[]
}