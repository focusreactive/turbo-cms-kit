import type { SectionCopy } from "@/generated/extracted-types";

export interface ICopyProps {
  data: SectionCopy & {
    _key: string;
  };
}
