import { Copy5050 as Copy5050UI } from "@shared/ui";

import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICopy5050Props } from "./types";

export default function Copy5050({ data }: ICopy5050Props) {
  if (!data) return null;

  const { columns, isReversedOnMobile, _key, theme = "light" } = data;

  return (
    <SectionContainer id={_key} theme={theme}>
      {columns && (
        <Copy5050UI
          columns={columns.map(prepareRichTextProps)}
          isReversedOnMobile={isReversedOnMobile}
        />
      )}
    </SectionContainer>
  );
}
