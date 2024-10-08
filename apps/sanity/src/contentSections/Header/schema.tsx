import { AlignVariant } from "@shared/ui/components/sections/header/types";
import { defineField } from "sanity";

import customImage from "@/lib/schemas/customImage";
import customLink from "@/lib/schemas/customLink";

import { commonGroups, themeField } from "../commonFields";

export default {
  name: "section.header",
  title: "Header",
  type: "object",
  groups: commonGroups,
  options: {},
  fields: [
    defineField({
      name: "image",
      type: customImage.name,
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
      group: "content",
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
      validation: (Rule) => Rule.required(),
      initialValue: AlignVariant.Right,
    }),
    themeField,
  ],
  preview: {
    prepare: () => ({
      title: "Header",
    }),
  },
};
