import { Copy as CopyUI } from "@shared/ui";

import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICopyProps } from "./types";

export default function Copy({ data }: ICopyProps) {
  if (!data) return null;

  const { text, _key, theme = "light" } = data;

  return (
    <SectionContainer id={_key} theme={theme}>
      {text && <CopyUI richText={prepareRichTextProps(text as any)} />}
    </SectionContainer>
  );
}
