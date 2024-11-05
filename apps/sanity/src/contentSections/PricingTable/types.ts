import { type SectionPricingTable } from "@/generated/extracted-types";

export interface IPricingSectionProps {
  data: SectionPricingTable & {
    _key: string;
  };
}
