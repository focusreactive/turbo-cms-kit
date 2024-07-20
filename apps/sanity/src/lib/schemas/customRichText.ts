import { AlignVariant } from "@shared/ui/components/ui/richText/types";
import { defineField, defineType } from "sanity";

import cardsGrid from "./contentSections/cardsGrid";
import logos from "./contentSections/logos";
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
        {
          type: "block",
        },
        {
          type: customImage.name,
        },
        {
          type: logos.name,
        },
        {
          type: cardsGrid.name,
        },
      ],
    }),

    defineField({
      name: "alignVariant",
      type: "string",
      group: "style",
      options: {
        list: Object.values(AlignVariant).map((v) => ({
          title: v,
          value: v,
        })),
        layout: "radio",
        direction: "horizontal",
      },
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
