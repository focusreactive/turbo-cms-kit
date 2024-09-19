import { Header as HeaderUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeaderProps } from "./types";

export default function Header({ blok }: IHeaderProps) {
  const { links } = blok;

  return (
    <SectionContainer blok={blok} className="sticky left-0 top-0 z-50">
      <HeaderUI links={links.map(prepareLinkProps)} />
    </SectionContainer>
  );
}
