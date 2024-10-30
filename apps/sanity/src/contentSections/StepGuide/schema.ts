import {
  CommonGroup,
  commonGroups,
  sectionMarginFields,
} from "@/contentSections/commonFields";
import { defineField, defineType } from "sanity";

import customImage from "@/lib/schemas/customImage";
import customLink from "@/lib/schemas/customLink";

export const stepGuideItem = defineType({
  name: "stepGuideItem",
  type: "object",
  title: "Step Guide Item",
  fields: [
    defineField({
      name: "number",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "1",
    }),
    defineField({
      name: "text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: customImage.name,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default {
  name: "section.stepGuide",
  title: "Step Guide",
  type: "object",
  groups: commonGroups,
  fields: [
    defineField({
      name: "items",
      type: "array",
      of: [{ type: stepGuideItem.name }],
      validation: (Rule) => Rule.required().min(1),
      group: CommonGroup.Content,
    }),
    defineField({
      name: "link",
      type: customLink.name,
      validation: (Rule) => Rule.required(),
      group: CommonGroup.Content,
    }),
    ...sectionMarginFields,
  ],
  preview: {
    select: {
      length: "items.length",
    },
    prepare(value: any) {
      return {
        title: `${value.length} items`,
      };
    },
  },
};
