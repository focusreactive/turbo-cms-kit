import { defineField } from "sanity";

import customImage from "@/lib/schemas/customImage";
import customLink from "@/lib/schemas/customLink";
import customRichText from "@/lib/schemas/customRichText";

export default {
  name: "section.hero",
  title: "Hero",
  type: "object",
  options: {
    variants: [
      {
        assetUrl: "/images/hero.png",
      },
    ],
  },
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
  fields: [
    defineField({
      name: "text",
      type: customRichText.name,
      group: "content",
    }),
    defineField({
      name: "image",
      type: customImage.name,
      group: "content",
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
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
  // todo: move to helper
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
          : "No title",
      };
    },
  },
};
