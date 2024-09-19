import { AlignVariant } from "@shared/ui/components/sections/logos/types";
import { defineField, defineType } from "sanity";

import customImage from "@/lib/schemas/customImage";
import customLink from "@/lib/schemas/customLink";

import { sectionMarginFields, themeField } from "../commonFields";

export const logoItem = defineType({
  name: "logoItem",
  type: "object",
  title: "Logo Item",
  fields: [
    defineField({
      name: "type",
      type: "string",
      title: "Logo type",
      options: {
        list: [
          { title: "Logo", value: "logo" },
          { title: "Clickable logo", value: "clickableLogo" },
        ],
      },
    }),
    defineField({
      name: "image",
      type: customImage.name,
    }),
    defineField({
      name: "link",
      type: customLink.name,
      hidden: ({ parent }) => !parent?.type || parent?.type === "logo",
    }),
  ],
  preview: {
    select: {
      media: "image.image",
    },
    prepare({ media }: any) {
      return {
        title: media.alt,
        media,
      };
    },
  },
});

export default {
  options: {},
  name: "section.logos",
  title: "Logos",
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
      name: "items",
      type: "array",
      group: "content",
      of: [{ type: logoItem.name }],
      validation: (Rule) => Rule.required().min(1),
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
    themeField,
    ...sectionMarginFields,
  ],
  preview: {
    prepare: () => ({
      title: "Logos",
    }),
  },
};
