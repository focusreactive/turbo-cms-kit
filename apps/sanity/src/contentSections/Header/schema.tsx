import { defineField } from "sanity";

import customLink from "@/lib/schemas/customLink";

export default {
  name: "section.header",
  title: "Header",
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
  options: {},
  fields: [
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
  preview: {
    prepare: () => ({
      title: "Header",
    }),
  },
};
