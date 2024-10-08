import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { LinksList as LinksListUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ILinksLinkProps } from "./types";

export default function LinksList({ blok }: ILinksLinkProps) {
  const { links, alignVariant } = blok;

  if (links.length === 0) return <EmptyBlock name={blok.component as string} />;

  return (
    <SectionContainer blok={blok}>
      <LinksListUI
        alignVariant={alignVariant}
        links={links.map(prepareLinkProps)}
      />
    </SectionContainer>
  );
}
