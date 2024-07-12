import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

import customRichText from "../customRichText";

export default defineSection({
  name: "section.copy",
  title: "Copy",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
  ],
  options: {
    variants: [
      {
        assetUrl: "/images/copy.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "text",
      type: customRichText.name,
      group: "content",
    }),
  ],
  preview: {
    select: {
      text: "text.text",
    },
    prepare(value) {
      const block = (value.text || []).find(
        (block: { _type: string }) => block._type === "block",
      );
      return {
        title: block
          ? block.children
              .filter((child: { _type: string }) => child._type === "span")
              .map((span: { text: any }) => span.text)
              .join("")
          : "No text",
      };
    },
  },
});
