import { defineField, defineType } from "sanity";

import customImage from "./customImage";

export default defineType({
  name: "customRichText",
  title: "RichText",
  type: "object",

  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    { name: "style", title: "Style" },
  ],
  fields: [
    defineField({
      name: "text",
      type: "array",
      group: "content",
      of: [
        { type: "block" },
        {
          type: customImage.name,
        },
      ],
    }),
    defineField({
      name: "removeInnerMargins",
      type: "boolean",
      group: "style",
    }),
  ],
  preview: {
    select: {
      text: "customRichText.text",
    },
    prepare(value) {
      const block = (value.text || []).find(
        (block: { _type: string }) => block._type === "block",
      );
      const image = (value.text || []).find(
        (block: { _type: string }) => block._type === "customImage",
      );

      if (image) {
        return {
          title: image.alt,
          media: image?.image,
        };
      }

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
