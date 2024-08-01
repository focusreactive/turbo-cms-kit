import { defineField } from "sanity";

import customLink from "@/lib/schemas/customLink";

export default {
  options: {},
  name: "section.linksList",
  title: "Links list",
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
  fields: [
    defineField({
      name: "links",
      type: "array",
      group: "content",
      of: [{ type: customLink.name }],
    }),
    defineField({
      name: "alignVariant",
      type: "string",
      group: "style",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
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
    select: {
      links: "links",
      alignVariant: "alignVariant",
    },
    prepare(value: any) {
      const linkText = value.links[0].text;

      return {
        title: linkText || "No text",
      };
    },
  },
};
