import { Logos } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { ILogosSectionProps } from "./types";

export default function LogosSection({ data }: ILogosSectionProps) {
  if (!data) return null;

  const { items, variant, _key, theme = "light" } = data;

  const formattedItems = items?.map((item) => ({
    ...item,
    image: prepareImageProps(item.image),
    link:
      item.type === "logoLink" && item.link
        ? prepareLinkProps(item.link)
        : undefined,
  }));

  return (
    <SectionContainer id={_key} theme={theme}>
      <Logos items={formattedItems} variant={variant} />
    </SectionContainer>
  );
}
