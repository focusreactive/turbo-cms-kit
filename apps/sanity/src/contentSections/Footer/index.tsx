import { Footer as FooterUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { IFooterProps } from "./types";

export default function Footer({ data }: IFooterProps) {
  if (!data) return null;

  const { links, text, copywriteText } = data;

  return (
    <SectionContainer sectionData={data}>
      <FooterUI
        copywriteText={copywriteText}
        links={links?.map(prepareLinkProps) || []}
        text={prepareRichTextProps(text)}
      />
    </SectionContainer>
  );
}
