import type { SectionCardsGrid } from "@/generated/extracted-types";

export interface ICardsGridSectionProps {
  data: SectionCardsGrid & {
    _key: string;
  };
}
