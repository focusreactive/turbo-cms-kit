import type { SectionFooter } from "@/generated/extracted-schema-types";

export interface IFooterProps {
  data: SectionFooter & {
    _key: string;
  };
}
