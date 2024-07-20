import { stegaClean } from "@sanity/client/stega";
import type {
  AlignVariant,
  IRichTextProps,
} from "@shared/ui/components/ui/richText/types";

import renderRichText from "../renderRichText";

export interface IRichText {
  alignVariant?: AlignVariant;
  text: any[];
  removeInnerMargins?: boolean;
}

export const prepareRichTextProps = (props: IRichText): IRichTextProps => {
  if (!props)
    return {
      richText: null,
      removeInnerMargins: false,
    };

  return {
    richText: renderRichText(props.text),
    removeInnerMargins: props.removeInnerMargins,
    alignVariant: stegaClean(props.alignVariant),
  };
};
