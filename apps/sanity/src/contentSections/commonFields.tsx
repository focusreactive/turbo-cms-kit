import { defineField } from "sanity";

export const commonGroups = [
  {
    name: "content",
    title: "Content",
    default: true,
  },
  {
    name: "style",
    title: "Style",
  },
];

export const themeField = defineField({
  name: "theme",
  type: "string",
  group: "style",
  options: {
    list: [
      { title: "light", value: "light" },
      { title: "dark", value: "dark" },
    ],
    layout: "radio",
    direction: "horizontal",
  },
  initialValue: "light",
  validation: (Rule) => Rule.required(),
});

export const sectionMarginFields = [
  defineField({
    name: "marginTop",
    type: "string",
    group: "style",
    options: {
      list: [
        { title: "none", value: "none" },
        { title: "base", value: "base" },
        { title: "large", value: "lg" },
      ],
      layout: "dropdown",
    },
    initialValue: "base",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "marginBottom",
    type: "string",
    group: "style",
    options: {
      list: [
        { title: "none", value: "none" },
        { title: "base", value: "base" },
        { title: "large", value: "lg" },
      ],
      layout: "dropdown",
    },
    initialValue: "base",
    validation: (Rule) => Rule.required(),
  }),
];
