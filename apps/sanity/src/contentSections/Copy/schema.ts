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
    {
      name: "style",
      title: "Style",
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
      text: "text.text",
    },
    prepare(value: any) {
      const block = (value.text || []).find(
        (block: { _type: string; children: any }) =>
          block._type === "block" && block.children?.[0].text,
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
