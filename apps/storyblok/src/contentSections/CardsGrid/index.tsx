import { CardsGrid as CardsGridUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICardsGridProps } from "./types";

export default function CardsGrid({ blok }: ICardsGridProps) {
  const { items, columns } = blok;

  const formattedItems = items.map((item) => ({
    ...item,
    type: item._type,
    image: item.image[0] && prepareImageProps(item.image[0]),
    link: item.link[0] && prepareLinkProps(item.link[0]),
  }));

  return (
    <SectionContainer blok={blok}>
      <CardsGridUI items={formattedItems} columns={parseInt(columns)} />
    </SectionContainer>
  );
}
