import { defineField } from "sanity";

export enum CommonGroup {
  Content = "content",
  Style = "style",
}

export const commonGroups = [
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

export const sectionCommonFields = [
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
  defineField({
    name: "maxWidth",
    type: "string",
    group: CommonGroup.Style,
    options: {
      list: [
        { title: "none", value: "none" },
        { title: "base", value: "base" },
      ],
      layout: "dropdown",
    },
    initialValue: "base",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "backgroundColor",
    type: "string",
    group: CommonGroup.Style,
    options: {
      list: [
        { title: "white", value: "white" },
        { title: "lightGray", value: "lightGray" },
        { title: "darkGray", value: "darkGray" },
        { title: "black", value: "black" },
        { title: "none", value: "none" },
      ],
      layout: "dropdown",
    },
    initialValue: "none",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "backgroundImage",
    type: "image",
    group: CommonGroup.Style,
  }),
];
