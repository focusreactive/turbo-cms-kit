import { sectionsPresets } from "@/contentSections/presets";
import { definePathname } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";

import sections from "@/lib/schemas/sections";
import { componentsWithBlocksInput } from "@/lib/templateSelectorInput";

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
      description: "For preview use only",
    }),
    definePathname({ name: "pathname", group: "content" }),
    defineField({
      name: "sectionsBody",
      title: "Sections",
      type: "array",
      group: "content",
      of: sections.map((section) => ({
        type: section.name,
      })),
      components: componentsWithBlocksInput({
        presets: Object.values(sectionsPresets).flat(),
      }),
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
          { title: "index", value: "index" },
          { title: "no index", value: "noindex" },
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
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
      ],
      group: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "pathname.current",
    },
  },
});
