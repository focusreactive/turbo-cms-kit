import type { IRichTextProps } from "@shared/ui/components/ui/richText/types";
import type { ISbRichtext, SbBlokData } from "@storyblok/react/rsc";
import renderRichText from "./renderRichText";

export interface IRichTextBlok extends SbBlokData {
    content: ISbRichtext;
    hasInnerMargins?: boolean;
}


export const prepareRichTextProps = (props: IRichTextBlok) => {
    return {
        richText: renderRichText(props.content),
        disableInnerMargins: props.hasInnerMargins
    } as IRichTextProps;
}