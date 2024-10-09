import type { AlignVariant } from "@shared/ui/components/sections/header/types";

import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface IHeader extends ISectionContainer {
  links: ILinkBlok[];
  alignVariant: AlignVariant;
  image: IImage[];
}

export interface IHeaderProps {
  blok: IHeader;
}
