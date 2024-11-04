import { defineField, defineType } from "sanity";

import customImage from "@/lib/schemas/customImage";

import {
  CommonGroup,
  commonGroups,
  sectionMarginFields,
} from "../../commonFields";

export const simpleCarouselCard = defineType({
  name: "simpleCarouselCard",
  type: "object",
  title: "Simple Carousel Card",
  options: {},
  fields: [
    defineField({
      name: "text",
      type: "customRichText",
    }),
    defineField({
      name: "image",
      type: customImage.name,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      image: "image.image",
    },
    prepare({ image }) {
      return {
        title: "Slide",
        media: image,
      };
    },
  },
});

export default {
  options: {},
  name: "section.simpleCarousel",
  title: "Simple Carousel",
  type: "object",
  groups: commonGroups,
  fields: [
    defineField({
      group: CommonGroup.Content,
      name: "text",
      type: "customRichText",
    }),
    defineField({
      group: CommonGroup.Content,
      name: "slides",
      type: "array",
      of: [{ type: "simpleCarouselCard" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "effect",
      type: "string",
      group: CommonGroup.Style,
      options: {
        list: [
          { title: "Slide", value: "slide" },
          { title: "Coverflow", value: "coverflow" },
          { title: "Cube", value: "cube" },
          { title: "Fade", value: "fade" },
          { title: "Flip", value: "flip" },
          { title: "Cards", value: "cards" },
        ],
        layout: "radio",
      },
      initialValue: "slide",
    }),
    defineField({
      name: "fullWidth",
      type: "boolean",
      group: CommonGroup.Style,
    }),
    defineField({
      name: "params",
      type: "object",
      group: CommonGroup.Style,
      fields: [
        defineField({
          name: "loop",
          type: "boolean",
        }),
        defineField({
          name: "slidesPerView",
          type: "number",
        }),
        defineField({
          name: "spaceBetween",
          type: "number",
        }),
      ],
    }),
    ...sectionMarginFields,
  ],
  preview: {
    select: {
      slides: "slides",
    },
    prepare: ({ slides }: any) => ({
      title: `Simple Carousel - ${slides.length} slides`,
    }),
  },
};
