import type { SectionLinksList } from "@/generated/extracted-schema-types";

export interface ILinksListSectionProps {
  data: SectionLinksList & {
    _key: string;
  };
}
