import type { BlogStyle } from "@shared/ui/components/sections/blog/types";
import type { SbBlokData } from "@storyblok/react/rsc";

import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { IRichText } from "@/lib/adapters/prepareRichTextProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface IBlogPost extends SbBlokData {
  date: string;
  image: IImage[];
  link: ILinkBlok[];
  text: IRichText[];
}

interface IBlog extends ISectionContainer {
  text: IRichText[];
  posts: IBlogPost[];
  style: BlogStyle;
}

export interface IBlogProps {
  blok: IBlog;
}
