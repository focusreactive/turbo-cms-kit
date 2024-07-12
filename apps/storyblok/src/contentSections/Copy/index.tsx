import type React from "react";

import { Copy } from "@shared/ui";

import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import { type ICopyProps } from "./types";

const CopySection: React.FunctionComponent<ICopyProps> = ({ blok }) => {
  return (
    <SectionContainer blok={blok}>
      <Copy richText={prepareRichTextProps(blok.text[0])} />
    </SectionContainer>
  );
};

export default CopySection;
