import type { SectionCopy } from "@/generated/extracted-schema-types";

export interface ICopyProps {
  data: SectionCopy & {
    _key: string;
  };
}
