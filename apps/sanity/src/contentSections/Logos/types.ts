import type { LogosVariant } from "@shared/ui/components/sections/logos/types";

import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILink } from "@/lib/adapters/prepareLinkProps";

interface ILogoItem {
  _key: string;
  image: IImage;
  link?: ILink;
  type?: "logo" | "clickableLogo";
}

export interface ILogos {
  _key: string;
  items: ILogoItem[];
  variant?: LogosVariant;
  theme?: "light" | "dark";
}

export interface ILogosSectionProps {
  data: ILogos;
}
