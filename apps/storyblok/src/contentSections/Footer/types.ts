import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { IRichText } from "@/lib/adapters/prepareRichTextProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface IFooter extends ISectionContainer {
  links: ILinkBlok[];
  text: IRichText[];
  copywriteText?: string;
}

export interface IFooterProps {
  blok: IFooter;
}
