import type { IRichTextProps } from "@shared/ui/components/ui/richText/types";
import renderRichText from "../renderRichText";

export interface IRichText {
  text: any[];
  removeInnerMargins?: boolean;
}

export const prepareRichTextProps = (props: IRichText): IRichTextProps => {
  return {
    richText: renderRichText(props.text),
    removeInnerMargins: props.removeInnerMargins,
  };
};
