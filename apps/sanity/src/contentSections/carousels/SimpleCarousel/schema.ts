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
      name: "slides",
      type: "array",
      of: [{ type: "simpleCarouselCard" }],
      validation: (Rule) => Rule.required(),
    }),
    ...sectionMarginFields,
  ],
  preview: {
    select: {
      slides: "preview.slides",
    },
    prepare: ({ slides }: any) => ({
      title: `Simple Carousel - ${slides.length} slides`,
    }),
  },
};
