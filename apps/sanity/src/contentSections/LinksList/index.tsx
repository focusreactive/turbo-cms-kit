import { stegaClean } from "@sanity/client/stega";
import EmptyBlock from "@shared/ui/components/EmptyBlock";
import type { AlignVariant } from "@shared/ui/components/sections/linksList/types";

import { LinksList } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ILinksListSectionProps } from "./types";

export default function LinksListSection({ data }: ILinksListSectionProps) {
  if (!data) return null;

  const { links, alignVariant } = data;

  if (!links || links.length === 0) return <EmptyBlock name="Links list" />;

  return (
    <SectionContainer sectionData={data}>
      <LinksList
        alignVariant={stegaClean(alignVariant) as AlignVariant}
        links={links?.map(prepareLinkProps) || []}
      />
    </SectionContainer>
  );
}
