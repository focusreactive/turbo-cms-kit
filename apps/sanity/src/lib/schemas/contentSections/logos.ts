import { LogosVariant } from "@shared/ui/components/sections/logos/types";
import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

import customImage from "../customImage";
import customLink from "../customLink";

export const logoItem = defineField({
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
          { title: "Logo with link", value: "logoLink" },
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
      hidden: ({ parent }) => !parent.type || parent?.type === "logo",
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

export default defineSection({
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
      name: "variant",
      type: "string",
      group: "style",
      options: {
        list: Object.values(LogosVariant).map((v) => ({
          title: v,
          value: v,
        })),
        layout: "radio",
        direction: "horizontal",
      },
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Logos",
    }),
  },
});
