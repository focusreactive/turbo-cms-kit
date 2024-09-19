import { DefaultCardStyle } from "@shared/ui/components/sections/cardsGrid/types";

import { CardsGrid as SharedCardsGrid } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICardsGridSectionProps } from "./types";

export default function CardsGrid({ data }: ICardsGridSectionProps) {
  if (!data) return null;

  const { items, columns, _key, theme = "light" } = data;

  const formattedItems = items?.map((item) => ({
    description: item.description || "",
    title: item.title || "",
    style: (item.style as DefaultCardStyle) || DefaultCardStyle.IconLeft,
    type: item._type,
    image: prepareImageProps(item.image),
    link: prepareLinkProps(item.link),
  }));

  return (
    <SectionContainer id={_key} theme={theme}>
      <SharedCardsGrid items={formattedItems || []} columns={columns || 2} />
    </SectionContainer>
  );
}
