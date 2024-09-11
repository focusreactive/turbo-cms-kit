import type { AlignVariant } from "@shared/ui/components/sections/linksList/types";

import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface ILinksLink extends ISectionContainer {
  alignVariant: AlignVariant;
  links: ILinkBlok[];
}

export interface ILinksLinkProps {
  blok: ILinksLink;
}
