import type { ILink } from "@/lib/adapters/prepareLinkProps";
import type { IRichText } from "@/lib/adapters/prepareRichTextProps";

interface IFooter {
  _key: string;
  links: ILink[];
  text: IRichText;
  copywriteText?: string;
  theme?: "light" | "dark";
}

export interface IFooterProps {
  data: IFooter;
}
