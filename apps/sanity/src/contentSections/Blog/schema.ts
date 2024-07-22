import { defineSection } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";

import customRichText from "@/lib/schemas/customRichText";

export const blogPost = defineType({
  name: "blogSection.post",
  type: "object",
  title: "Blog post",
  fields: [
    defineField({
      name: "date",
      type: "date",
    }),
    defineField({
      name: "link",
      type: "customLink",
    }),
    defineField({
      name: "image",
      type: "customImage",
    }),
    defineField({
      name: "text",
      type: "customRichText",
    }),
    //   defineField({
    //     name: 'authors',
    //     type: 'array',
    //     of: [{ type: blogAuthor.name }],
    //   }),
    //   defineField({
    //     name: 'tags',
    //     type: 'array',
    //     of: [{ type: blogTag.name }],
    //   }),
  ],
  preview: {
    prepare() {
      return {
        title: "Post",
      };
    },
  },
});

export default defineSection({
  name: "section.blog",
  title: "Blog section",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "style",
      title: "Style",
    },
  ],
  options: {},
  fields: [
    defineField({
      name: "text",
      type: customRichText.name,
      group: "content",
    }),
    defineField({
      name: "style",
      type: "string",
      group: "style",
      options: {
        list: [
          { title: "Three column", value: "three-column" },
          {
            title: "Three column with images",
            value: "three-column-with-images",
          },
          {
            title: "Three column with background images",
            value: "three-column-with-background-images",
          },
        ],
        layout: "dropdown",
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
      name: "posts",
      type: "array",
      group: "content",
      of: [{ type: blogPost.name }],
    }),
  ],
  preview: {
    select: {
      text: "text.text",
      style: "style",
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
        description: value.style,
      };
    },
  },
});
