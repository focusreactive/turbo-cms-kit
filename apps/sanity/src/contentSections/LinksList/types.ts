import type { ILink } from "@/lib/adapters/prepareLinkProps";

export interface ILinksList {
  _key: string;
  links: ILink[];
  alignVariant?: string;
  theme?: "light" | "dark";
}

export interface ILinksListSectionProps {
  data: ILinksList;
}
