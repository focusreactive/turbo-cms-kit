import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Copy as CopyUI } from "@shared/ui";

import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { ICopyProps } from "./types";

export default function Copy({ data }: ICopyProps) {
  if (!data) return <EmptyBlock name="Copy Section" />;

  const { columns, isReversedOnMobile } = data;

  return (
    <SectionContainer sectionData={data}>
      {columns && (
        <CopyUI
          columns={columns?.map(prepareRichTextProps) || []}
          isReversedOnMobile={isReversedOnMobile}
        />
      )}
    </SectionContainer>
  );
}
