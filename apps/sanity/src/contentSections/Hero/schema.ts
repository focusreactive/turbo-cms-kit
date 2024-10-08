import { defineField } from "sanity";

import customImage from "@/lib/schemas/customImage";
import customLink from "@/lib/schemas/customLink";

import {
  CommonGroup,
  commonGroups,
  sectionMarginFields,
} from "../commonFields";

export default {
  options: {},
  name: "section.hero",
  title: "Hero",
  type: "object",
  groups: commonGroups,
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: CommonGroup.Content,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      group: CommonGroup.Content,
      name: "text",
      type: "customRichText",
    }),
    defineField({
      group: CommonGroup.Content,
      name: "image",
      type: customImage.name,
    }),
    defineField({
      group: CommonGroup.Content,
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
      validation: (Rule) => Rule.required(),
    }),
    // themeField,
    ...sectionMarginFields,
  ],
  preview: {
    prepare: () => ({
      title: "Hero",
    }),
  },
};
