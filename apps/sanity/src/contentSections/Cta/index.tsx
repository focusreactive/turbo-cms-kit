import { CTA } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICtaProps } from "./types";

export default function Cta({ data }: ICtaProps) {
  if (!data) return null;

  const { text, links, _key, variant, theme = "light" } = data;

  return (
    <SectionContainer id={_key} theme={theme}>
      <CTA
        variant={variant}
        richText={prepareRichTextProps(text as any)}
        links={links.map(prepareLinkProps)}
      />
    </SectionContainer>
  );
}
