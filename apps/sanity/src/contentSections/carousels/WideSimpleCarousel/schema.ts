import { defineField, defineType } from "sanity";

import customImage from "@/lib/schemas/customImage"; // Ensure this is correctly defined and imported

import {
  CommonGroup,
  commonGroups,
  sectionCommonFields,
} from "../../commonFields";

// Ensure these imports are correct and do not create circular dependencies

export const wideSimpleCarouselCard = defineType({
  name: "wideSimpleCarouselCard",
  type: "object",
  title: "Wide Simple Carousel Card",
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
  name: "section.wideSimpleCarousel",
  title: "Wide Simple Carousel",
  type: "object",
  groups: commonGroups,
  fields: [
    defineField({
      group: CommonGroup.Style,
      name: "slides",
      type: "array",
      of: [{ type: wideSimpleCarouselCard.name }],
      validation: (Rule) => Rule.required(),
    }),
    ...sectionCommonFields,
  ],
  preview: {
    select: {
      slides: "slides.length",
    },
    prepare: ({ slides }: any) => ({
      title: `Wide Simple Carousel - ${slides.length} slides`,
    }),
  },
};
