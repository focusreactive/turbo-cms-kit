import { Copy as CopyUI } from "@shared/ui";

import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICopyProps } from "./types";

export default function Copy({ data }: ICopyProps) {
  const { text, _key } = data;

  return (
    <SectionContainer id={_key}>
      <CopyUI richText={prepareRichTextProps(text as any)} />
    </SectionContainer>
  );
}
