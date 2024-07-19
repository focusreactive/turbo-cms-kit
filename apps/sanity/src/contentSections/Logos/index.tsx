import { Logos } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ILogosSectionProps } from "./types";

export default function LogosSection({ data }: ILogosSectionProps) {
  const { items, variant, _key } = data;

  const formattedItems = items?.map((item) => ({
    ...item,
    image: prepareImageProps(item.image),
    link:
      item.type === "logoLink" && item.link
        ? prepareLinkProps(item.link)
        : undefined,
  }));

  return (
    <SectionContainer id={_key}>
      <Logos items={formattedItems} variant={variant} />
    </SectionContainer>
  );
}
