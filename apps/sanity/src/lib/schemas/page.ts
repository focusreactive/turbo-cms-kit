import { definePathname, SectionsArrayInput } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";

import { sections } from "./contentSections";

export default defineType({
  type: "document",
  name: "page",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      type: "string",
      name: "title",
      group: "content",
    }),

    definePathname({ name: "pathname" }),
    defineField({
      name: "sectionsBody",
      title: "Sections",
      type: "array",
      group: "content",
      of: sections.map((section) => ({
        type: section.name,
      })),
      components: {
        input: SectionsArrayInput,
      },
    }),
    defineField({
      type: "string",
      name: "seoTitle",
      title: "SEO Title",
      group: "seo",
    }),
    defineField({
      type: "string",
      name: "seoDescription",
      title: "SEO Description",
      group: "seo",
    }),
    defineField({
      name: "robots",
      type: "string",
      options: {
        list: [
          { title: "Index", value: "index" },
          { title: "No Index", value: "noindex" },
        ],
      },
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      title: "Open Graph Image",
      fields: [
        {
          name: "alt",
          type: "string",
          // todo: make required
          title: "Alternative text",
        },
      ],
      group: "seo",
    }),
  ],
});
