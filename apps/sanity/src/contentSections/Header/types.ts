import type { SectionHeader } from "@/generated/extracted-types";

export interface IHeaderProps {
  data: SectionHeader & {
    _key: string;
  };
}
