import { HeroSection } from '@shared/ui'
import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from '@/components/SectionContainer';
import type { IHeroProps } from './types';


export default function Hero({ data }: IHeroProps) {
  const { text, image, links, _key } = data;

  return (
    <SectionContainer id={_key}>
        <HeroSection
        richText={prepareRichTextProps(text)}
        image={prepareImageProps(image)}
        links={links.map(prepareLinkProps)}
      />
    </SectionContainer>
  )
}
