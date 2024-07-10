import { render } from "storyblok-rich-text-react-renderer";
import type { ISbRichtext, SbBlokData } from "@storyblok/react/rsc";

export interface IRichText extends SbBlokData {
  content: ISbRichtext;
}

export default function renderRichText(data: IRichText) {
  return render(data.content, {
    markResolvers: {},
    nodeResolvers: {},
    blokResolvers: {},
  });
}
