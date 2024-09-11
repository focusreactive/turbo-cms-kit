import type { AlignVariant } from "@shared/ui/components/sections/linksList/types";

import type { ILink } from "@/lib/adapters/prepareLinkProps";

export interface ILinksList {
  _key: string;
  links: ILink[];
  alignVariant?: AlignVariant;
  theme?: "light" | "dark";
}

export interface ILinksListSectionProps {
  data: ILinksList;
}
