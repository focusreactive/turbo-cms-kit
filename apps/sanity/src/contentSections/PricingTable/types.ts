import { type SectionPricing } from "@/generated/extracted-types";

export interface IPricingSectionProps {
  data: SectionPricing & {
    _key: string;
  };
}
