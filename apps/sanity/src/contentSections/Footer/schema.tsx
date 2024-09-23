import { defineField } from "sanity";

import customLink from "@/lib/schemas/customLink";
import customRichText from "@/lib/schemas/customRichText";

import { commonGroups, themeField } from "../commonFields";

export default {
  name: "section.footer",
  title: "Footer",
  type: "object",
  groups: commonGroups,
  options: {},
  fields: [
    defineField({
      name: "text",
      type: customRichText.name,
      group: "content",
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
      group: "content",
    }),

    defineField({
      name: "copywriteText",
      type: "string",
      group: "content",
    }),
    themeField,
  ],
  preview: {
    prepare: () => ({
      title: "Footer",
    }),
  },
};
