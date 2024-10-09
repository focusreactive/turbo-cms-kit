import { blogPost } from "@/contentSections/Blog/schema";
import { defaultCard } from "@/contentSections/CardsGrid/schema";
import { simpleCarouselCard } from "@/contentSections/carousels/SimpleCarousel/schema";
import { wideSimpleCarouselCard } from "@/contentSections/carousels/WideSimpleCarousel/schema";
import { logoItem } from "@/contentSections/Logos/schema";

import customImage from "./customImage";
import customLink from "./customLink";
import customRichText, { basicRichText, richTextBreak } from "./customRichText";
// prettier-ignore
import page from "@/components/Page/schema";

import footer from "@/components/Footer/schema";
import header from "@/components/Header/schema";

import sections from "./sections";

const schemas = [
  page,
  header,
  footer,
  customImage,
  customLink,
  customRichText,
  logoItem,
  defaultCard,
  richTextBreak,
  basicRichText,
  blogPost,
  simpleCarouselCard,
  wideSimpleCarouselCard,
  ...sections,
];

export default schemas;
