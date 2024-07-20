import React from "react";

import { CardsGrid as SharedCardsGrid } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICardsGridSectionProps } from "./types";

export default function CardsGrid({ data }: ICardsGridSectionProps) {
  if (!data) return null;

  const { items, columns, _key, theme = "light" } = data;

  const formattedItems = items
    ?.map((item) => ({
      ...item,
      icon: prepareImageProps(item.icon),
      link: prepareLinkProps(item.links?.[0]),
    }))
    .filter((v) => v.icon);

  return (
    <SectionContainer id={_key} theme={theme}>
      <SharedCardsGrid items={formattedItems} columns={columns} />
    </SectionContainer>
  );
}
