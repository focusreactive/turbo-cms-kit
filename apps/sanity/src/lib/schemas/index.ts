import { blogPost } from "@/contentSections/Blog/schema";
import {
  clickableImageCard,
  defaultCard,
} from "@/contentSections/CardsGrid/schema";
import { logoItem } from "@/contentSections/Logos/schema";

import customImage from "./customImage";
import customLink from "./customLink";
import customRichText, { basicRichText, richTextBreak } from "./customRichText";
// prettier-ignore
import page from "@/components/page/schema";

import sections from "./sections";

const schemas = [
  page,
  customImage,
  customLink,
  customRichText,
  logoItem,
  defaultCard,
  richTextBreak,
  basicRichText,
  clickableImageCard,
  blogPost,
  ...sections,
];

export default schemas;
