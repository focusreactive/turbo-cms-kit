import { defineField, type FieldGroupDefinition } from "sanity";

export enum CommonGroup {
  Content = "content",
  Style = "style",
}

export const commonGroups: FieldGroupDefinition[] = [
  {
    name: CommonGroup.Content,
    title: "Content",
    default: true,
  },
  {
    name: CommonGroup.Style,
    title: "Style",
  },
];

export const themeField = defineField({
  name: "theme",
  type: "string",
  group: CommonGroup.Style,
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
    group: CommonGroup.Style,
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
    group: CommonGroup.Style,
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
