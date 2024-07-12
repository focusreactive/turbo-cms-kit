import type { SbBlokData } from "@storyblok/react/rsc";

import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { IRichTextBlok } from "@/lib/adapters/prepareRichTextProps";

interface IHero extends SbBlokData {
  text: IRichTextBlok[];
  image: IImage[];
  links: ILinkBlok[];
}

export interface IHeroProps {
  blok: IHero;
}
