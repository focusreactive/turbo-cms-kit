import React from "react";

import { CardsGrid as SharedCardsGrid } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICardsGridSectionProps } from "./types";

export default function CardsGrid({ data }: ICardsGridSectionProps) {
  if (!data) return null;

  const { items, columns, _key, theme = "light" } = data;

  const formattedItems = items?.map((item) => {
    return {
      ...item,
      type: item._type,
      text: item.text ? prepareRichTextProps(item.text) : undefined,
      image: item.image ? prepareImageProps(item.image) : undefined,
      icon: item.icon ? prepareImageProps(item.icon) : undefined,
      link: prepareLinkProps(item.link || item.links?.[0]),
    };
  });

  return (
    <SectionContainer id={_key} theme={theme}>
      <SharedCardsGrid items={formattedItems as any[]} columns={columns} />
    </SectionContainer>
  );
}
