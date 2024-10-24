import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Hero } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeroSectionProps } from "./types";

export default function HeroSection({ data }: IHeroSectionProps) {
  if (!data) return null;

  const { title, text, image, links } = data;

  if (!title && !text?.text && !image?.image && (!links || links.length === 0))
    return <EmptyBlock name="Hero Section" />;

  return (
    <SectionContainer sectionData={data}>
      <Hero
        title={title}
        text={prepareRichTextProps(text)}
        image={prepareImageProps(image)}
        links={links?.map(prepareLinkProps) || []}
      />
    </SectionContainer>
  );
}
