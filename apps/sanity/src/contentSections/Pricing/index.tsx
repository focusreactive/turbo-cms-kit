import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Pricing } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { IPricingSectionProps } from "./types";

export default function PricingSection({ data }: IPricingSectionProps) {
  if (!data || data.tiers.length === 0)
    return <EmptyBlock name="Pricing Section" />;

  const { tiers } = data;

  const formattedTiers = tiers?.map((tier) => ({
    ...tier,
    icon: prepareImageProps(tier.icon),
    cta: prepareLinkProps(tier.link),
  }));

  return (
    <SectionContainer sectionData={data}>
      <Pricing {...data} tiers={formattedTiers} />
    </SectionContainer>
  );
}
