import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

interface IHeader extends ISectionContainer {
  links: ILinkBlok[];
}

export interface IHeaderProps {
  blok: IHeader;
}
