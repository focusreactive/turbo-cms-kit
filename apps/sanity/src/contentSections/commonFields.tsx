import { defineField } from "sanity";

export const themeField = defineField({
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
});

export const sectionMarginFields = [
  defineField({
    name: "marginTop",
    type: "string",
    group: "style",
    options: {
      list: [
        { title: "None", value: "none" },
        { title: "Base", value: "base" },
        { title: "Large", value: "lg" },
      ],
      layout: "dropdown",
    },
  }),
  defineField({
    name: "marginBottom",
    type: "string",
    group: "style",
    options: {
      list: [
        { title: "None", value: "none" },
        { title: "Base", value: "base" },
        { title: "Large", value: "lg" },
      ],
      layout: "dropdown",
    },
  }),
];
