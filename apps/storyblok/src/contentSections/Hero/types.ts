import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { IRichText } from "@/lib/adapters/prepareRichTextProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

export interface IHero extends ISectionContainer {
  title: string;
  text: IRichText[];
  image: IImage[];
  links: ILinkBlok[];
}

export interface IHeroProps {
  blok: IHero;
}
