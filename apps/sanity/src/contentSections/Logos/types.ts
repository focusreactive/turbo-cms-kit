import type { SectionLogos } from "@/generated/extracted-schema-types";

export interface ILogosSectionProps {
  data: SectionLogos & {
    _key: string;
  };
}
