import { defineField } from "sanity";

import customLink from "@/lib/schemas/customLink";

import { sectionMarginFields, themeField } from "../commonFields";

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
    themeField,
    ...sectionMarginFields,
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
