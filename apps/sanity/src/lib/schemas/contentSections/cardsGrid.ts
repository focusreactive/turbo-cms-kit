import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

import customImage from "../customImage";
import customLink from "../customLink";

const featurePointStyles = [
  { title: "Icon on the left", value: "icon-left" },
  {
    title: "Icon with background on the left",
    value: "icon-left-with-background",
  },
  { title: "Icon and title on the same line", value: "icon-title-inline" },
  { title: "Icon on the top", value: "icon-top" },
  { title: "No icon", value: "no-icon" },
  {
    title: "Icon on the left, separate title",
    value: "icon-left-separate-title",
  },
];

export const defaultCard = defineField({
  name: "defaultCard",
  type: "object",
  title: "Default card",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({ name: "description", type: "string" }),
    defineField({
      name: "style",
      type: "string",
      options: {
        list: featurePointStyles,
        layout: "dropdown",
      },
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
    }),
    defineField({
      name: "icon",
      type: customImage.name,
    }),
  ],
});

export default defineSection({
  options: {},
  name: "section.cardsGrid",
  title: "Cards Grid",
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
      group: "style",
      name: "columns",
      type: "number",
      options: {
        list: [1, 2, 3],
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
    defineField({
      name: "items",
      type: "array",
      group: "content",
      of: [{ type: "defaultCard" }],
    }),
  ],
  preview: {
    select: {
      columns: "columns",
    },
    prepare: ({ columns }: any) => ({
      title: `Cards Grid - ${columns} cols`,
    }),
  },
});
