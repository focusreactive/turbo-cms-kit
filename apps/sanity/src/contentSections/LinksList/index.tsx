import { stegaClean } from "@sanity/client/stega";
import { AlignVariant } from "@shared/ui/components/sections/linksList/types";

import { LinksList } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ILinksListSectionProps } from "./types";

export default function LinksListSection({ data }: ILinksListSectionProps) {
  if (!data) return null;

  const { _key, links, theme, alignVariant = AlignVariant.Left } = data;

  return (
    <SectionContainer id={_key} theme={theme}>
      <LinksList
        alignVariant={stegaClean(alignVariant)}
        links={links.map(prepareLinkProps)}
      />
    </SectionContainer>
  );
}
