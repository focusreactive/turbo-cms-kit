import { defineField } from "sanity";

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
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
      group: "content",
      validation: (Rule) => Rule.required().min(1),
    }),
    themeField,
  ],
  preview: {
    prepare: () => ({
      title: "Header",
    }),
  },
};
