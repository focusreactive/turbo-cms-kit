import type { SectionLinksList } from "@/generated/extracted-types";

export interface ILinksListSectionProps {
  data: SectionLinksList & {
    _key: string;
  };
}
