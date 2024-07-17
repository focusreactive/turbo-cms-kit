import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

import customImage from "../customImage";
import customLink from "../customLink";
import customRichText from "../customRichText";

const initialValue = {
  _type: "section.hero",
  image: {
    _type: "image",
    aspectRatio: "4/3",
    height: 200,
    image: {
      _type: "image",
      alt: "phone",
      asset: {
        _ref: "image-4b4e8099d7b6803394fb4bcd4b572cd489d8eeed-943x706-webp",
        _type: "reference",
      },
    },
  },
  links: [
    {
      _key: "6bfd63796998",
      _type: "customLink",
      text: "Get Started",
      type: "internal",
      url: {
        _ref: "04aba029-958e-4436-a31d-52b023df9248",
        _type: "reference",
      },
      variant: "primary",
    },
    {
      _key: "1e797ba3a272",
      _type: "customLink",
      href: "https://duckduckgo.com",
      target: "_blank",
      text: "Learn More",
      type: "url",
      url: {
        _ref: "04aba029-958e-4436-a31d-52b023df9248",
        _type: "reference",
      },
      variant: "secondary",
    },
  ],
  text: {
    _type: "customRichText",
    removeInnerMargins: false,
    text: [
      {
        _key: "01f1f812c91e",
        _type: "block",
        children: [
          {
            _key: "17fdce996d3f0",
            _type: "span",
            marks: ["strong"],
            text: "Payments tool for software companies",
          },
        ],
        markDefs: [],
        style: "h1",
      },
      {
        _key: "e1eb1a898583",
        _type: "block",
        children: [
          {
            _key: "5a26c67cf6290",
            _type: "span",
            marks: [],
            text: "From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
  },
};

export default defineSection({
  name: "section.hero",
  title: "Hero",
  initialValue: initialValue,
  type: "object",
  options: {
    variants: [
      {
        assetUrl: "/images/hero.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "text",
      type: customRichText.name,
    }),
    defineField({
      name: "image",
      type: customImage.name,
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: customLink.name }],
    }),
  ],
  // todo: move to helper
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
          : "No title",
      };
    },
  },
});
