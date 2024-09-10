import { defineField } from "sanity";

import customRichText from "@/lib/schemas/customRichText";

export default {
  name: "section.copy",
  title: "Copy",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    { name: "style", title: "Style" },
  ],
  options: {},
  fields: [
    defineField({
      name: "columns",
      type: "array",
      group: "content",
      of: [{ type: customRichText.name }],
      validation: (Rule) => Rule.required().min(1).max(2),
    }),

    defineField({
      name: "isReversedOnMobile",
      type: "boolean",
      group: "style",
    }),
    defineField({
      name: "theme",
      type: "string",
      group: "style",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
  ],
  preview: {
    select: {
      text: "columns.0.text",
    },
    prepare(value: any) {
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
};
