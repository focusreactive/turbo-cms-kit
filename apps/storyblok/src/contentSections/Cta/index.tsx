import type React from "react";

import { CTA } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import { type ICtaProps } from "./types";

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
