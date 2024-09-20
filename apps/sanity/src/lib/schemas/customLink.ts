import { commonGroups } from "@/contentSections/commonFields";
import { LinkVariant } from "@shared/ui/components/ui/link/types";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "customLink",
  title: "Link",
  type: "object",
  groups: commonGroups,
  fields: [
    defineField({
      name: "text",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
      initialValue: "link text",
    }),
    defineField({
      group: "content",
      name: "type",
      type: "string",
      title: "Link Type",
      options: {
        list: [
          { title: "URL", value: "url" },
          { title: "Internal", value: "internal" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "internal",
    }),
    defineField({
      group: "content",
      name: "href",
      type: "string",
      hidden: ({ parent }) => !parent?.type || parent?.type === "internal",
    }),
    defineField({
      group: "content",
      name: "target",
      type: "string",
      options: {
        list: [
          { title: "Self", value: "_self" },
          { title: "Blank", value: "_blank" },
          { title: "Parent", value: "_parent" },
          { title: "Top", value: "_top" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "_self",
    }),

    defineField({
      group: "content",
      name: "url",
      type: "reference",
      to: [{ type: "page" }], // todo: change to page.name
      hidden: ({ parent }) => !parent?.type || parent?.type === "url",
    }),

    defineField({
      group: "style",
      name: "variant",
      type: "string",
      options: {
        list: Object.values(LinkVariant).map((variant) => ({
          title: variant,
          value: variant,
        })),
      },
      validation: (Rule) => Rule.required(),
      initialValue: LinkVariant.Default,
    }),
  ],
});
