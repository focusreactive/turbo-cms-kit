import { LinkVariant } from "@shared/ui/components/ui/link/types";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "customLink",
  title: "Link",
  type: "object",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "style", title: "Style" },
  ],
  fields: [
    defineField({
      name: "text",
      type: "string",
    }),
    defineField({
      group: "content",
      name: "type",
      type: "string",
      title: "Link Type",
      initialValue: "internal",
      options: {
        list: [
          { title: "URL", value: "url" },
          { title: "Internal", value: "internal" },
        ],
      },
    }),
    defineField({
      group: "content",
      name: "href",
      type: "string",
      hidden: ({ parent }) => !parent.type || parent?.type === "internal",
    }),
    defineField({
      group: "content",
      name: "target",
      type: "string",
      initialValue: "_self",
      options: {
        list: [
          { title: "Self", value: "_self" },
          { title: "Blank", value: "_blank" },
          { title: "Parent", value: "_parent" },
          { title: "Top", value: "_top" },
        ],
      },
    }),

    defineField({
      group: "content",
      name: "url",
      type: "reference",
      to: [{ type: "page" }], // todo: change to page.name
      hidden: ({ parent }) => !parent.type || parent?.type === "url",
    }),

    defineField({
      group: "style",
      name: "variant",
      type: "string",

      initialValue: LinkVariant.Primary,
      options: {
        list: Object.values(LinkVariant).map((variant) => ({
          title: variant,
          value: variant,
        })),
      },
    }),
  ],
});
