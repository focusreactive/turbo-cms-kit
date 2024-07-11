import { CTA } from "@shared/ui";
import type React from "react";
import { type ICtaProps } from "./types";
import SectionContainer from "@/components/SectionContainer";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";

const Cta: React.FunctionComponent<ICtaProps> = ({ blok }) => {
  return (
    <SectionContainer blok={blok}>
      <CTA
        richText={prepareRichTextProps(blok.text[0])}
        variant={blok.variant}
        links={blok.links.map((link) => prepareLinkProps(link))}
      />
    </SectionContainer>
  );
};

export default Cta;
