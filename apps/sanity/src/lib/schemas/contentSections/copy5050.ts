import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

import customRichText from "../customRichText";

export default defineSection({
  name: "section.copy5050",
  title: "Copy 50/50",
  type: "object",
  groups: [{ name: "style", title: "Style" }],
  options: {
    variants: [
      {
        assetUrl: "/images/copy5050.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "columns",
      type: "array",
      of: [{ type: customRichText.name }],
      validation: (Rule) => Rule.required().min(1).max(2),
    }),

    defineField({
      name: "isReversedOnMobile",
      type: "boolean",
      group: "style",
    }),
  ],
  preview: {
    select: {
      text: "columns.0.text",
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
