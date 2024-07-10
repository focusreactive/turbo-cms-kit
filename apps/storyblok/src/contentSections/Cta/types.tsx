import type { ILinkBlok } from "@/lib/adapters/prepareLinkProps";
import type { IRichTextBlok } from "@/lib/adapters/prepareRichTextProps";
import type { CtaVariant } from "@shared/ui/components/sections/cta/types";
import type { SbBlokData } from "@storyblok/react/rsc";

interface ICta extends SbBlokData {
    text: IRichTextBlok[]
    links: ILinkBlok[]
    variant: CtaVariant
}

export interface ICtaProps {
    blok: ICta;
}
