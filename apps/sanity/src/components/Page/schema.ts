import { CommonGroup } from "@/contentSections/commonFields";
// import { sectionsPresets } from "@/contentSections/presets";
import { definePathname } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";

import sections from "@/lib/schemas/sections";
import { sectionsPresets } from "@/contentSections/presets";
import { defineBlocksField } from '@focus-reactive/sanity-plugin-cms-kit';

// import { componentsWithBlocksInput } from "@/lib/templateSelectorInput";

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
      group: CommonGroup.Content,
      description: "For preview use only",
    }),
    definePathname({ name: "pathname", group: CommonGroup.Content }),
    defineField({
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      group: CommonGroup.Content,
      validation: (Rule) => Rule.required(),
    }),
    defineBlocksField({
      name: "sectionsBody",
      title: "Sections",
      group: CommonGroup.Content,
      of: sections.map((section) => ({
        type: section.name,
      })),
      // components: componentsWithBlocksInput({
      //   presets: Object.values(sectionsPresets).flat(),
      // }),
      options: {
        presets: Object.values(sectionsPresets).flat(),
      },
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      group: CommonGroup.Content,
      validation: (Rule) => Rule.required(),
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
      type: "boolean",
      name: "showCookieBanner",
      title: "Show Cookie Banner",
      group: "seo",
      initialValue: true,
    }),
    defineField({
      name: "robots",
      type: "string",
      options: {
        list: [
          { title: "index", value: "index" },
          { title: "no index", value: "no-index" },
        ],
      },
      group: "seo",
      initialValue: "index",
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
