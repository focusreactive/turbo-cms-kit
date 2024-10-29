import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { ISectionContainer } from "@/components/SectionContainer/types";

export interface IPricingTier {
  name: string;
  icon: IImage[];
  price?: string;
  description: string;
  features: { text: string }[];
  link: ILinkBlok[];
  popular?: boolean;
}

export interface IPricing extends ISectionContainer {
  tiers: IPricingTier[];
  extraServiceEnabled?: boolean;
  yearlyDiscountPercentage: string;
  extraService?: {
    text: string;
    cost: string;
  }[];
}

export interface IPricingProps {
  blok: IPricing;
}
