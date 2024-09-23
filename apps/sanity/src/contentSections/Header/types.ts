import type { SectionHeader } from "@/generated/extracted-schema-types";

export interface IHeaderProps {
  data: SectionHeader & {
    _key: string;
  };
}
