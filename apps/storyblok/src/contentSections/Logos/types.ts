import type { AlignVariant } from "@shared/ui/components/sections/logos/types";

import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface ILogoItem {
  image: IImage[];
  link: ILinkBlok[];
  type: "logo" | "clickableLogo";
}

export interface ILogos extends ISectionContainer {
  items: ILogoItem[];
  alignVariant: AlignVariant;
}

export interface ILogosProps {
  blok: ILogos;
}
