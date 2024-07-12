import { CtaVariant } from "@shared/ui/components/sections/cta/types";
import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

import customLink from "../customLink";
import customRichText from "../customRichText";

export default defineSection({
  name: "section.cta",
  title: "CTA",
  type: "object",
  groups: [{ name: "style", title: "Style" }],
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
    }),

    defineField({
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
    }),

    defineField({
      name: "variant",
      type: "string",
      group: "style",
      initialValue: CtaVariant.Default,
      options: {
        // todo: should this field be part of the section or rich text implementation?
        list: Object.values(CtaVariant).map((variant) => ({
          title: variant,
          value: variant,
        })),
      },
    }),
  ],
  preview: {
    select: {
      text: "text.text",
    },
    prepare(value) {
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
});
