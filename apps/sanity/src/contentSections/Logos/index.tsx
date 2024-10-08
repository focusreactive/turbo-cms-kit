import { stegaClean } from "@sanity/client/stega";
import EmptyBlock from "@shared/ui/components/EmptyBlock";
import type { AlignVariant } from "@shared/ui/components/sections/logos/types";

import { Logos } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ILogosSectionProps } from "./types";

export default function LogosSection({ data }: ILogosSectionProps) {
  if (!data) return null;

  const { items, alignVariant } = data;

  if (!items || items.length === 0) return <EmptyBlock name="Logos Section" />;

  const formattedItems = items?.map((item) => ({
    ...item,
    image: prepareImageProps(item.image),
    link:
      item.type === "clickableLogo" && item.link
        ? prepareLinkProps(item.link)
        : undefined,
  }));

  return (
    <SectionContainer sectionData={data}>
      <Logos
        items={formattedItems || []}
        alignVariant={stegaClean(alignVariant) as AlignVariant}
      />
    </SectionContainer>
  );
}
