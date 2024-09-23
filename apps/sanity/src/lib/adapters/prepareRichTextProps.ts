import type { CustomRichText } from "@/generated/extracted-types";
import { stegaClean } from "@sanity/client/stega";
import {
  AlignVariant,
  type IRichTextProps,
} from "@shared/ui/components/ui/richText/types";

import renderRichText from "../renderRichText";

export const prepareRichTextProps = (
  props?: CustomRichText,
): IRichTextProps => {
  if (!props || !props.text)
    return {
      richText: null,
      removeInnerMargins: false,
      alignVariant: AlignVariant.Left,
    };

  return {
    richText: renderRichText(props.text),
    removeInnerMargins: props.removeInnerMargins,
    alignVariant: stegaClean(props.alignVariant) as AlignVariant,
  };
};
