import { Copy5050 } from "@shared/ui";

import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICopy5050Props } from "./types";

export default function Copy5050Section({ blok }: ICopy5050Props) {
  const { columns, isReversedOnMobile } = blok;

  return (
    <SectionContainer blok={blok}>
      <Copy5050
        columns={columns.map(prepareRichTextProps)}
        isReversedOnMobile={isReversedOnMobile}
      />
    </SectionContainer>
  );
}
