import {
  AlignVariant,
  type IRichTextProps,
} from "@shared/ui/components/ui/richText/types";
import type { ISbRichtext, SbBlokData } from "@storyblok/react/rsc";

import renderRichText from "../renderRichText";

export interface IRichText extends SbBlokData {
  content: ISbRichtext;
  removeInnerMargins?: boolean;
  alignVariant: AlignVariant;
}

export const prepareRichTextProps = (props?: IRichText): IRichTextProps => {
  if (!props) {
    return {
      richText: null,
      removeInnerMargins: false,
      alignVariant: AlignVariant.Left,
    };
  }

  return {
    richText: renderRichText(props.content),
    removeInnerMargins: props.removeInnerMargins,
    alignVariant: props.alignVariant,
  };
};
