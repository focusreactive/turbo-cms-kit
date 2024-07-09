import { render } from "storyblok-rich-text-react-renderer";
import type { ISbRichtext } from "@storyblok/react/rsc";

export default function renderRichText(data: ISbRichtext) {
  return render(data, {
    markResolvers: {},
    nodeResolvers: {},
    blokResolvers: {},
  });
}
