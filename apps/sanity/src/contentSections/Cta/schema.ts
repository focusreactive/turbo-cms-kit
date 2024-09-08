import { CtaVariant } from "@shared/ui/components/sections/cta/types";
import { defineField } from "sanity";

import customLink from "@/lib/schemas/customLink";
import customRichText from "@/lib/schemas/customRichText";

export default {
  name: "section.cta",
  title: "CTA",
  type: "object",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "style", title: "Style" },
  ],
  options: {
    variants: [
      {
        assetUrl: "/images/cta.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "text",
      type: customRichText.name,
      group: "content",
    }),

    defineField({
      name: "links",
      group: "content",
      type: "array",
      of: [{ type: customLink.name }],
    }),

    defineField({
      group: "style",
      name: "variant",
      type: "string",
      initialValue: CtaVariant.Default,
      options: {
        // todo: should this field be part of the section or rich text implementation?
        list: Object.values(CtaVariant).map((variant) => ({
          title: variant,
          value: variant,
        })),
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
  ],
  preview: {
    select: {
      text: "text.text",
    },
    prepare(value: any) {
      const block = (value.text || []).find(
        (block: { _type: string }) => block._type === "block",
      );
      return {
        title: block
          ? block.children
              .filter((child: { _type: string }) => child._type === "span")
              .map((span: { text: any }) => span.text)
              .join("")
          : "No text",
      };
    },
  },
};
