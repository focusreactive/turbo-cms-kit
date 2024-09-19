import type { SectionCardsGrid } from "@/generated/extracted-schema-types";

export interface ICardsGridSectionProps {
  data: SectionCardsGrid & {
    _key: string;
  };
}
