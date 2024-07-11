import { Copy5050 } from '@shared/ui'
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from '@/components/SectionContainer';
import type { ICopy5050Props } from './types';

export default function Cta({ data }: ICopy5050Props) {
  const { columns, isReversedOnMobile, _key } = data;

  return (
    <SectionContainer id={_key}>
                   <Copy5050 columns={columns.map(prepareRichTextProps)} isReversedOnMobile={isReversedOnMobile} />
    </SectionContainer>
  )
}
