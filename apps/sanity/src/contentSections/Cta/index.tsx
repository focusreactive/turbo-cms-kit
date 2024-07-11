import { CTA } from '@shared/ui'
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from '@/components/SectionContainer';
import type { ICtaProps } from './types';

export default function Cta({ data }: ICtaProps) {
  const { text, links, _key, variant } = data;

  return (
    <SectionContainer id={_key}>
        <CTA
          variant={variant}
        richText={prepareRichTextProps(text as any)}
        links={links.map(prepareLinkProps)}
      />
    </SectionContainer>
  )
}
