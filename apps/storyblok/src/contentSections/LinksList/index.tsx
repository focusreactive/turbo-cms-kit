import { LinksList as LinksListUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ILinksLinkProps } from "./types";

export default function LinksList({ blok }: ILinksLinkProps) {
  const { links, alignVariant } = blok;

  return (
    <SectionContainer blok={blok}>
      <LinksListUI
        alignVariant={alignVariant}
        links={links.map(prepareLinkProps)}
      />
    </SectionContainer>
  );
}
