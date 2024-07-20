import { HeroSection } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeroProps } from "./types";

export default function Hero({ data }: IHeroProps) {
  if (!data) return null;

  const { text, image, links, _key, theme = "light" } = data;

  return (
    <SectionContainer id={_key} theme={theme}>
      <HeroSection
        richText={prepareRichTextProps(text)}
        image={prepareImageProps(image)}
        links={links?.map(prepareLinkProps) || []}
      />
    </SectionContainer>
  );
}
