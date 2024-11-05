import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { PricingTable } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { IPricingProps } from "./types";

export default function PricingTableSection({ blok }: IPricingProps) {
  if (!blok || blok?.tiers?.length === 0)
    return <EmptyBlock name={blok.component as string} />;

  const { tiers, yearlyDiscountPercentage } = blok;

  const formattedTiers = tiers?.map((tier) => ({
    ...tier,
    icon: prepareImageProps(tier.icon[0]),
    cta: prepareLinkProps(tier.link[0]),
    price: tier.price ? parseFloat(tier.price) : undefined,
    features: tier.features?.map(({ text }) => text),
  }));
  const extraService =
    blok.extraServiceEnabled && blok.extraService?.[0]
      ? {
          text: blok.extraService[0].text,
          cost: parseFloat(blok.extraService[0]?.cost),
        }
      : undefined;

  return (
    <SectionContainer blok={blok}>
      <PricingTable
        {...blok}
        tiers={formattedTiers || []}
        extraService={extraService}
        yearlyDiscountPercentage={
          yearlyDiscountPercentage ? parseFloat(yearlyDiscountPercentage) : 0
        }
      />
    </SectionContainer>
  );
}
