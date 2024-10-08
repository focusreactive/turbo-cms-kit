import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Header as HeaderUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeaderProps } from "./types";

export default function Header({ blok }: IHeaderProps) {
  const { links } = blok;

  if (links.length === 0) return <EmptyBlock name={blok.component as string} />;

  return (
    <SectionContainer blok={blok} className="sticky left-0 top-0 z-50">
      <HeaderUI links={links.map(prepareLinkProps)} />
    </SectionContainer>
  );
}
