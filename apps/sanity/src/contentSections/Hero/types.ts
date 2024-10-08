import type { SectionHero } from "@/generated/extracted-types";

export interface IHeroSectionProps {
  data: SectionHero & {
    _key: string;
  };
}
