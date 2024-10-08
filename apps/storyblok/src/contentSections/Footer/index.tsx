import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Footer as FooterUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { IFooterProps } from "./types";

export default function Footer({ blok }: IFooterProps) {
  const { links, text, copywriteText } = blok;

  if (links.length === 0) return <EmptyBlock name={blok.component as string} />;

  return (
    <SectionContainer blok={blok}>
      <FooterUI
        copywriteText={copywriteText}
        links={links.map(prepareLinkProps)}
        text={prepareRichTextProps(text[0])}
      />
    </SectionContainer>
  );
}
