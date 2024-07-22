import { defineSection } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";

import customImage from "@/lib/schemas/customImage";
import customLink from "@/lib/schemas/customLink";
import { basicRichText } from "@/lib/schemas/customRichText";

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

export const defaultCard = defineType({
  name: "defaultCard",
  type: "object",
  title: "Default card",
  options: {},
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
      name: "title",
      type: "string",
      group: "content",
    }),
    defineField({ name: "description", type: "string", group: "content" }),
    defineField({
      name: "style",
      type: "string",
      options: {
        list: featurePointStyles,
        layout: "dropdown",
      },
      group: "style",
    }),
    defineField({
      name: "link",
      type: "customLink",
      group: "content",
    }),
    defineField({
      name: "image",
      type: customImage.name,
      group: "content",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      image: "image.image",
    },
    prepare({ title, subtitle, image }) {
      return {
        media: image,
        title,
        subtitle,
      };
    },
  },
});

export const clickableImageCard = defineType({
  options: {},
  name: "clickableImageCard",
  type: "object",
  title: "Clickable image card",
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
      name: "image",
      type: customImage.name,
      group: "content",
    }),
    defineField({
      name: "text",
      type: basicRichText.name,
      group: "content",
    }),
    defineField({
      name: "link",
      type: customLink.name,
      group: "content",
    }),
  ],
  preview: {
    select: {
      text: "text.text",
      image: "image.image",
    },
    prepare(value) {
      const block = (value.text || []).find(
        (block: { _type: string; children: any }) =>
          block._type === "block" && block.children?.[0].text,
      );

      return {
        title: block
          ? block.children
              .filter((child: { _type: string }) => child._type === "span")
              .map((span: { text: any }) => span.text)
              .join("")
          : "No text",
        media: value.image,
      };
    },
  },
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
      of: [{ type: "defaultCard" }, { type: "clickableImageCard" }],
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
